import { GET_SHOW, CHANGE_SHOW_STATE } from "./types";

// MODULE FOR APP INFO
export const App = {
  // STATE
  // ---------------------
  state: {
    show: "",
  },

  // GETTERS
  // ---------------------
  getters: {
    [GET_SHOW]: (state) => {
      return state.show;
    },
  },

  // MUTATIONS
  // ---------------------
  mutations: {
    [CHANGE_SHOW_STATE]: (state, show) => {
      state.show = show;
    },
  },
};
