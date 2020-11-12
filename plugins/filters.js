import Vue from 'vue'
import moment from 'moment'

/* 통화 */
Vue.filter('price', (value) => {
  if (!value) return value
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})

/* 날짜 */
Vue.filter('date', (value, format) => {
  if (!value) return value
  return moment(value).format(format || 'YYYY.MM.DD')
})

/* 휴대폰 번호 */
Vue.filter('mobile', (value) => {
  if (!value || !(value.length === 10 || value.length === 11)) return value
  return value.replace(/^(\d{3})(\d{3,4})(\d{4})/g, '$1-$2-$3')
})

/* 보안 */
Vue.filter('security', (value) => {
  if (!value || value.length < 3) return value
  const arr = value.split('')
  return arr.map((t, i) => {
    return (i < 2 || i > 4) ? t : '*'
  }).join('')
})
