import {
  CHANGE_CITIES_STATE,
  CHANGE_COUNT_STATE,
  CHANGE_ERROR_STATE,
  CHANGE_FILTERED_VALUE_STATE,
  CHANGE_LOADING_STATE,
  CHANGE_STORES_STATE,
  mutations,
} from "@/store";

const setStories = mutations[CHANGE_STORES_STATE];
const setCities = mutations[CHANGE_CITIES_STATE];
const setIsLoading = mutations[CHANGE_LOADING_STATE];
const setCount = mutations[CHANGE_COUNT_STATE];
const setError = mutations[CHANGE_ERROR_STATE];
const setFilter = mutations[CHANGE_FILTERED_VALUE_STATE];

describe("Mutations for shop", () => {
  // CHANGE_STORES_STATE
  it("stories state", () => {
    const stores = [
      {
        addressName: "Aalsmeer Ophelialaan.",
        uuid: "gmcKYx4X5HEAAAFIdhIYwKxK",
        city: "",
      },
    ];
    const state = {
      filteredValue: null,
      stores: [],
      cities: [],
      countOfStores: {},
      error: "",
      isLoading: false,
    };

    setStories(state, stores);
    expect(state).toEqual({
      filteredValue: null,
      stores: [
        {
          addressName: "Aalsmeer Ophelialaan.",
          uuid: "gmcKYx4X5HEAAAFIdhIYwKxK",
          city: "",
        },
      ],
      cities: [],
      countOfStores: {},
      error: "",
      isLoading: false,
    });
  });

  // CHANGE_CITIES_STATE
  it("cities state", () => {
    const cities = ["Amsterdam"];
    const state = {
      filteredValue: null,
      stores: [],
      cities: [],
      countOfStores: {},
      error: "",
      isLoading: false,
    };

    setCities(state, cities);
    expect(state).toEqual({
      filteredValue: null,
      stores: [],
      cities: ["Amsterdam"],
      countOfStores: {},
      error: "",
      isLoading: false,
    });
  });

  // CHANGE_CITIES_STATE
  it("loading state", () => {
    const state = {
      filteredValue: null,
      stores: [],
      cities: [],
      countOfStores: {},
      error: "",
      isLoading: false,
    };

    setIsLoading(state, true);
    expect(state).toEqual({
      filteredValue: null,
      stores: [],
      cities: [],
      countOfStores: {},
      error: "",
      isLoading: true,
    });
  });

  // CHANGE_COUNT_STATE
  it("count of shops state", () => {
    const countOfStores = { Amsterdam: 20 };
    const state = {
      filteredValue: null,
      stores: [],
      cities: [],
      countOfStores: {},
      error: "",
      isLoading: false,
    };

    setCount(state, countOfStores);
    expect(state).toEqual({
      filteredValue: null,
      stores: [],
      cities: [],
      countOfStores: { Amsterdam: 20 },
      error: "",
      isLoading: false,
    });
  });

  // CHANGE_FILTERED_VALUE_STATE
  it("filter state", () => {
    const state = {
      filteredValue: null,
      stores: [],
      cities: [],
      countOfStores: {},
      error: "",
      isLoading: false,
    };

    setFilter(state, "Amsterdam");
    expect(state).toEqual({
      filteredValue: "Amsterdam",
      stores: [],
      cities: [],
      countOfStores: {},
      error: "",
      isLoading: false,
    });
  });

  // CHANGE_ERROR_STATE
  it("Error state", () => {
    const state = {
      filteredValue: null,
      stores: [],
      cities: [],
      countOfStores: {},
      error: "",
      isLoading: false,
    };

    setError(state, "404 - not found");
    expect(state).toEqual({
      filteredValue: null,
      stores: [],
      cities: [],
      countOfStores: {},
      error: "404 - not found",
      isLoading: false,
    });
  });
});
