import axios from 'axios'

export const state = () => ({
  accessToken: '',
  rememberId: '',
  language: 'ko-KR',
  userInfo: {},
  userAgent: {}
})

export const getters = {
  isLogin: state => !!state.accessToken,
  isMobile: state => state.userAgent ? state.userAgent.platform.type === 'mobile' : false
}

export const mutations = {
  setAccessToken (state, payload = '') {
    state.accessToken = payload
  },
  setRememberId (state, payload) {
    state.rememberId = payload
  },
  setLanguage (state, payload) {
    state.language = payload
  },
  setUserInfo (state, payload = {}) {
    state.userInfo = payload
  },
  setUserAgent (state, payload = {}) {
    state.userAgent = payload
  }
}

const accessTokenName = process.env.ACCESS_TOKEN_NAME
const rememberIdName = process.env.REMEMBER_ID_NAME

export const actions = {
  setAccessToken ({ commit, state }, value = '') {
    return axios.post('/cookie', {
      name: accessTokenName,
      value: value,
      option: {
        maxAge: 1000 * 60 * 60 * 24 * 1 // 하루
      }
    }).then(res => {
      commit('setAccessToken', value)
      this.$aart.instance.setAccessToken(value)
    })
  },
  deleteAccessToken ({ commit }) {
    return axios.delete(`/cookie/${accessTokenName}`).then(res => {
      commit('setAccessToken', '')
      commit('setUserInfo', '')
      this.$aart.instance.setAccessToken('')
    })
  },
  setRememberId ({ commit, state }, value = '') {
    return axios.post('/cookie', {
      name: rememberIdName,
      value: value,
      option: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1주일
      }
    }).then(res => {
      commit('setRememberId', value)
    })
  },
  deleteRememberId ({ commit }) {
    return axios.delete(`/cookie/${rememberIdName}`).then(res => {
      commit('setRememberId', '')
    })
  }
}
