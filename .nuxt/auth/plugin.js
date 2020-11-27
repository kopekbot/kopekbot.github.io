import Auth from './auth'

import './middleware'

// Active schemes
import scheme_6ce4fcca from './schemes/oauth2.js'

export default function (ctx, inject) {
  // Options
  const options = {"resetOnError":false,"scopeKey":"scope","rewriteRedirects":true,"fullPathRedirect":false,"watchLoggedIn":true,"redirect":{"login":"/login","logout":"/logout","home":"/","callback":"/callback"},"vuex":{"namespace":"auth"},"cookie":{"prefix":"auth.","options":{"path":"/"}},"localStorage":{"prefix":"auth."},"token":{"prefix":"_token."},"refresh_token":{"prefix":"_refresh_token."},"defaultStrategy":"discord"}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // discord
  $auth.registerStrategy('discord', new scheme_6ce4fcca($auth, {"authorization_endpoint":"https://discordapp.com/api/oauth2/authorize","userinfo_endpoint":"https://discordapp.com/api/users/@me","scope":["identify"],"client_id":"456119574165848075","_name":"discord"}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      console.error('[ERROR] [AUTH]', error)
    }
  })
}
