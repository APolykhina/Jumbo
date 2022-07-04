import { appGetters } from "./getters";
import { appMutations } from "./mutations";

// MODULE FOR APP INFO
export const App = {
  // STATE
  // ---------------------
  state: {
    show: "",
  },

  getters: appGetters,

  mutations: appMutations,
};
