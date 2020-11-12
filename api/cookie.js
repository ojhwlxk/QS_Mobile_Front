const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

// CORS 설정.
app.use('/', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS')
  next()
})

app.post('/', function (req, res) {
  // console.log('## setCookie', req.body)
  if (req.body.name) {
    res.cookie(req.body.name, req.body.value || '', {
      maxAge: req.body.option.maxAge,
      sameSite: 'lax',
      httpOnly: true,
      // secure: true // https
      secure: false // http
    }).send()
  } else {
    res.send('')
  }
})

app.delete('/:name', function (req, res) {
  // console.log('## clearCookie', req.params)
  if (req.params.name) {
    res.clearCookie(req.params.name).send()
  } else {
    res.send('')
  }
})

export default app
