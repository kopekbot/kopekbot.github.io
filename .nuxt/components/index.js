export { default as Botstatus } from '../..\\src\\components\\botstatus.vue'
export { default as Bugform } from '../..\\src\\components\\bugform.vue'
export { default as Footer } from '../..\\src\\components\\footer.vue'

export const LazyBotstatus = import('../..\\src\\components\\botstatus.vue' /* webpackChunkName: "components_botstatus'}" */).then(c => c.default || c)
export const LazyBugform = import('../..\\src\\components\\bugform.vue' /* webpackChunkName: "components_bugform'}" */).then(c => c.default || c)
export const LazyFooter = import('../..\\src\\components\\footer.vue' /* webpackChunkName: "components_footer'}" */).then(c => c.default || c)
