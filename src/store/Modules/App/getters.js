import { GET_SHOW } from "./types";

// GETTERS FOR APP
// -------------------------
export const appGetters = {
  [GET_SHOW]: (state) => {
    return state.show;
  },
};
