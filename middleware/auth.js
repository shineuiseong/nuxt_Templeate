

export default async function ({$cookies,route,store,redirect})
{
  let token = {
    accessToken : $cookies.get('accessToken') ? $cookies.get('accessToken') : null,
    refreshToken : $cookies.get('refreshToken') ? $cookies.get('refreshToken') : null
  }
  console.log(token)

  if(route.path.includes('index')){
    return false
  }

}
