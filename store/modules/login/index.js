import mutations from "./mutations.js";
import getters from "./getters.js"
import state from './state.js'
import actions from './actions.js'

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions,
}
