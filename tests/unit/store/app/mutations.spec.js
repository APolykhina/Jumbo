import { appMutations, CHANGE_SHOW_STATE } from "@/store";

const setShow = appMutations[CHANGE_SHOW_STATE];

describe("Mutations for app", () => {
  // CHANGE_SHOW_STATE
  it("show state", () => {
    const state = {
      show: "cities",
    };

    setShow(state, "stores");
    expect(state).toEqual({
      show: "stores",
    });
  });
});
