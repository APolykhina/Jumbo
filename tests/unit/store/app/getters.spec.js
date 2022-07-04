import { appGetters, GET_SHOW } from "@/store";

const getShow = appGetters[GET_SHOW];

describe("Getters for app", () => {
  // checking GET_SHOW
  it("get show", () => {
    const state = {
      show: "cities",
    };
    const actual = getShow(state);
    expect(actual).toEqual(state.show);
  });
});
