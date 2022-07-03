import { getField, updateField } from "vuex-map-fields";
import { dataService, errorService, getShops } from "../../../API";
import {
  CHANGE_LOADING_STATE,
  CHANGE_STORES_STATE,
  CHANGE_CITIES_STATE,
  CHANGE_ERROR_STATE,
  CHANGE_COUNT_STATE,
  CHANGE_FILTERED_VALUE_STATE,
  FETCH_STORES,
  GET_STORES,
  GET_STORES_PER_CITY,
} from "./types";

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

  // GETTERS
  // ---------------------
  getters: {
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
  },

  // MUTATIONS
  // ---------------------
  mutations: {
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
  },

  // ACTIONS
  // ---------------------
  actions: {
    [FETCH_STORES]: async ({ commit }) => {
      try {
        // start loading shops data
        commit(CHANGE_LOADING_STATE, true);
        // make request
        const { data } = await getShops();
        const structuredData = dataService(data);
        // is successful -> save stores and cities
        commit(CHANGE_STORES_STATE, structuredData.stores);
        commit(CHANGE_CITIES_STATE, structuredData.cities);
        commit(CHANGE_COUNT_STATE, structuredData.countOfStores);
        commit(CHANGE_LOADING_STATE, false);
      } catch (error) {
        // something wrong
        commit(CHANGE_ERROR_STATE, errorService(error));
        commit(CHANGE_LOADING_STATE, false);
      }
    },
  },
};
