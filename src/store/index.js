/* stores/modules/index.js */
/* we assemble modules and export the store */
import Vue from "vue";
import Vuex from "vuex";
import headline from "./modules/headlines";
import sourceList from "./modules/sourcelist";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    headline,
    sourceList
  }
});
