import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

// MODULE FOR SHOPS INFO
export const Shops = {
  // STATE
  // ---------------------
  state: {
    filteredValue: null,
    stores: [],
    cities: [],
    countOfStores: {},
    error: "",
    isLoading: false,
  },

  getters: getters,

  mutations: mutations,

  actions: actions,
};
