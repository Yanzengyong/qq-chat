import directive from './directive.js'

export default {
  install (Vue) {
    Vue.use(directive)
  },
  directive
}
