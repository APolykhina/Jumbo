import { updateField } from "vuex-map-fields";
import {
  CHANGE_LOADING_STATE,
  CHANGE_STORES_STATE,
  CHANGE_CITIES_STATE,
  CHANGE_ERROR_STATE,
  CHANGE_COUNT_STATE,
  CHANGE_FILTERED_VALUE_STATE,
} from "./types";

// MUTATIONS FOR SHOPS
// -------------------------
export const mutations = {
  [CHANGE_STORES_STATE]: (state, stores) => {
    state.stores = stores;
  },

  [CHANGE_LOADING_STATE]: (state, loading) => {
    state.isLoading = loading;
  },

  [CHANGE_ERROR_STATE]: (state, error) => {
    state.error = error;
  },

  [CHANGE_CITIES_STATE]: (state, cities) => {
    state.cities = cities;
  },

  [CHANGE_COUNT_STATE]: (state, count) => {
    state.countOfStores = count;
  },

  [CHANGE_FILTERED_VALUE_STATE]: (state, value) => {
    state.filteredValue = value;
  },

  updateField,
};
