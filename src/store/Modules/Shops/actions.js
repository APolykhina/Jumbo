import { dataService, errorService, getShops } from "../../../API";
import {
  CHANGE_LOADING_STATE,
  CHANGE_STORES_STATE,
  CHANGE_CITIES_STATE,
  CHANGE_ERROR_STATE,
  CHANGE_COUNT_STATE,
  FETCH_STORES,
} from "./types";

// ACTIONS FOR SHOPS
// -------------------------
export const actions = {
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
};
