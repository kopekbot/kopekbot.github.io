import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _37b26b18 = () => interopDefault(import('..\\src\\pages\\callback.vue' /* webpackChunkName: "pages/callback" */))
const _cc4016b4 = () => interopDefault(import('..\\src\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _21a0aec6 = () => interopDefault(import('..\\src\\pages\\logout.vue' /* webpackChunkName: "pages/logout" */))
const _5f8f5ce2 = () => interopDefault(import('..\\src\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/callback",
    component: _37b26b18,
    name: "callback"
  }, {
    path: "/login",
    component: _cc4016b4,
    name: "login"
  }, {
    path: "/logout",
    component: _21a0aec6,
    name: "logout"
  }, {
    path: "/",
    component: _5f8f5ce2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
