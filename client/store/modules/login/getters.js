export default {

  getUser : state=> state.email || '',
  getToken: state=> state.token.accessToken|| null,
  getRefreshToken: state=> state.token.refreshToken || null,
  }

