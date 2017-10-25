import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    you: {
      name: '夜喵',
      avatar: '',
      msg: ''
    },
    me: {
      name: '',
      avatar: '',
      msg: ''
    }
  },
  getters: {
    getYouName (state) {
      return state.you.name
    },
    getYouAvatar (state) {
      return state.you.avatar
    },
    getYouMsg (state) {
      return state.you.msg
    },
    getMeName (state) {
      return state.me.name
    },
    getMeAvatar (state) {
      return state.me.avatar
    },
    getMeMsg (state) {
      return state.me.msg
    }
  },
  actions: {
    updateYouName (dis, val) {
      dis.commit('UPDATE_YOU_NAME', val)
    },
    updateYouAvatar (dis, val) {
      dis.commit('UPDATE_YOU_AVATAR)', val)
    },
    updateYouMsg (dis, val) {
      dis.commit('UPDATE_YOU_MSG', val)
    },
    updateMeName (dis, val) {
      dis.commit('UPDATE_ME_NAME', val)
    },
    updateMeAvatar (dis, val) {
      dis.commit('UPDATE_ME_AVATAR', val)
    },
    updateMeMsg (dis, val) {
      dis.commit('UPDATE_ME_MSG', val)
    }
  },
  mutations: {
    UPDATE_YOU_NAME (state, val) {
      state.you.name = val
    },
    UPDATE_YOU_AVATAR (state, val) {
      state.you.avatar = val
    },
    UPDATE_YOU_MSG (state, val) {
      state.you.msg = val
    },
    UPDATE_ME_NAME (state, val) {
      state.me.name = val
    },
    UPDATE_ME_AVATAR (state, val) {
      state.me.avatar = val
    },
    UPDATE_ME_MSG (state, val) {
      state.me.msg = val
    }
  }
})

export default store
