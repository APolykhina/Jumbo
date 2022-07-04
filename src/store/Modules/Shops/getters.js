import { getField } from "vuex-map-fields";
import { GET_STORES, GET_STORES_PER_CITY } from "./types";

// GETTERS FOR SHOPS
// -------------------------
export const getters = {
  [GET_STORES]: (state) => {
    if (state.filteredValue) {
      return state.stores.filter(
        (store) =>
          store.addressName
            .toLowerCase()
            .includes(state.filteredValue.toLowerCase()) ||
          store.city.toLowerCase().includes(state.filteredValue.toLowerCase())
      );
    } else {
      return state.stores;
    }
  },

  [GET_STORES_PER_CITY]: (state) => {
    if (state.filteredValue) {
      return state.stores.filter(
        (store) =>
          store.city.toLowerCase() === state.filteredValue.toLowerCase()
      );
    } else {
      return [];
    }
  },

  getField,
};
