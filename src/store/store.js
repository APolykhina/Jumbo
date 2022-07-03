import Vuex from "vuex";
import Vue from "vue";
import { Shops, App } from "./Modules";

Vue.use(Vuex);

// STORE CONFIGURATION
// ---------------------
export const store = new Vuex.Store({
  modules: {
    shops: Shops,
    app: App,
  },
});
