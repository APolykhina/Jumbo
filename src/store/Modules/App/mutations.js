import { CHANGE_SHOW_STATE } from "./types";

// MUTATIONS FOR APP
// -------------------------
export const appMutations = {
  [CHANGE_SHOW_STATE]: (state, show) => {
    state.show = show;
  },
};
