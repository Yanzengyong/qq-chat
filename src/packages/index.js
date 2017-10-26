import move from './move'

const install = function (Vue = {}) {
  Vue.use(move.directive)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
