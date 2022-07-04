import { GET_STORES, getters, GET_STORES_PER_CITY } from "@/store";

const getStores = getters[GET_STORES];
const getStoresPerCity = getters[GET_STORES_PER_CITY];

const stores = [
  {
    addressName: "Aalsmeer Ophelialaan.",
    uuid: "gmcKYx4X5HEAAAFIdhIYwKxK",
    city: "",
  },
  {
    addressName: "Aalsmeer Ophelialaan",
    uuid: "gssKYx4XJwoAAAFbn.BMqPTb",
    city: "Aalsmeer",
  },
  {
    addressName: "Aalst Aalst-Waalre",
    uuid: "zkIKYx4XXxcAAAFI7CMYwKxK",
    city: "",
  },
];

describe("Getters for shop", () => {
  // checking GET_STORES without filter
  it("get all stores", () => {
    const state = {
      filteredValue: null,
      stores: stores,
    };
    const actual = getStores(state);
    expect(actual).toEqual(state.stores);
  });

  // checking GET_STORES with filter
  it("get stores by filtered with filteredValue", () => {
    const state = {
      filteredValue: "Aalst Aalst-Waalre",
      stores: stores,
    };
    const actual = getStores(state);
    expect(actual).toEqual([state.stores[2]]);
  });

  // checking GET_STORES_PER_CITY without filter
  it("get stores by filtered with filteredValue", () => {
    const state = {
      filteredValue: null,
      stores: stores,
    };
    const actual = getStoresPerCity(state);
    expect(actual).toEqual([]);
  });

  // checking GET_STORES_PER_CITY with filtered city
  it("get stores by filtered with filteredValue", () => {
    const state = {
      filteredValue: "Aalsmeer",
      stores: stores,
    };
    const actual = getStoresPerCity(state);
    expect(actual).toEqual([state.stores[1]]);
  });
});
