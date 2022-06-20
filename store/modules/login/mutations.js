import Vue from "vue";

export default {

  /* TODO: 토글 관련 */
  toggleDrawer(state) {
    state.drawer = !state.drawer
  },
  drawer(state, val) {
    state.drawer = val
  },

  /* TODO: 유저 로그인 관련 */
  SET_USER(state,{email,password,auth}){
    state.email = email
    state.password = password
    state.auth = auth
  },

  loginToken(state,payload){

    state.token.accessToken = payload.accessToken
    state.token.refreshToken = payload.refreshToken

    this.$cookies.set('accessToken',payload.accessToken,{
      path:'/',
      maxAge:60
    })
    this.$cookies.set('refreshToken',payload.refreshToken,{
      path:'/',
      maxAge:3600
    })
  },

  refreshToken(state,payload){

    this.$cookies.set('accessToken',payload.accessToken,{
      path:'/',
      maxAge:60
    })
    this.$cookies.set('refreshToken',payload.refreshToken,{
      path:'/',
      maxAge:3600
    })
    state.token.accessToken = payload.accessToken
    state.token.refreshToken = payload.refreshToken
  },
  removeToken(state) {
    this.$cookies.remove('accessToken');
    this.$cookies.remove('refreshToken');
    state.token.accessToken = null
    state.token.refreshToken = null
  },
}

