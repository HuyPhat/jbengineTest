import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import headlineStore from "./stores/headlines.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    headline: headlineStore
  }
});
