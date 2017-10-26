const install = Vue => {
  Vue.directive('move', {
    bind: function (el, binding, vnode) {
      el.onmousedown = fnDown

      function fnDown (event) {
        var nodeNone = event.target.nodeName
        var disX = event.clientX - el.offsetLeft
        var disY = event.clientY - el.offsetTop
        document.onmousemove = function (event) {
          fnMove(event, disX, disY)
        }
        if (nodeNone === 'INPUT' || nodeNone === 'IMG' || nodeNone === 'A' || nodeNone === 'BUTTON') {
          document.onmousemove = null
          document.onmouseup = null
        } else {}

        document.onmouseup = function () {
          document.onmousemove = null
          document.onmouseup = null
        }
      }

      function fnMove (e, posX, posY) {
        var l = e.clientX - posX
        var t = e.clientY - posY
        var winW = document.documentElement.clientWidth
        var winH = document.documentElement.clientHeight
        var maxW = winW - el.offsetWidth
        var maxH = winH - el.offsetHeight
        e.stopPropagation()
        if (l < 0) {
          l = 0
        } else if (l > maxW) {
          l = maxW
        }
        if (t < 0) {
          t = 0
        } else if (t > maxH) {
          t = maxH
        }
        el.style.left = l + 'px'
        el.style.top = t + 'px'
      }
    },
    update: function (el, binding) {},
    unbind: function (el, binding) {}
  })
}

export default {
  install
}
