import cookieparser from 'cookieparser'

export default {
  actions:{
    nuxtServerInit({commit},{req}){

     // TODO: 쿠키 체크
      if(req.headers.cookie){
        try{
          // TODO: 쿠키 가져와서
          let token = {
            accessToken : this.$cookies.get('accessToken') ? this.$cookies.get('accessToken') : null,
            refreshToken : this.$cookies.get('refreshToken') ? this.$cookies.get('refreshToken') : null
          }
          // TODO: store에 넣어준다.
          commit('modules/login/loginToken',token)
        }catch (err){
          console.log(err)
        }
      }
    },
  }
}
