import {
  actions,
  CHANGE_CITIES_STATE,
  CHANGE_STORES_STATE,
  CHANGE_LOADING_STATE,
  CHANGE_COUNT_STATE,
  FETCH_STORES,
  CHANGE_ERROR_STATE,
} from "../../../../src/store";

const fetchData = actions[FETCH_STORES];

let mockError = false;

jest.mock("../../../../src/api/requests", () => ({
  getShops: () => {
    if (!mockError)
      return new Promise((resolve) =>
        resolve({
          data: [
            {
              type: "StoreListRO",
              uuid: "gmcKYx4X5HEAAAFIdhIYwKxK",
              addressName: "Jumbo Aalsmeer Ophelialaan.",
              street: "Ophelialaan",
              street2: "124",
              street3: "",
              city: "",
              postalCode: "",
              distance: 0,
              todayOpen: "08:00",
              todayClose: "22:00",
              latitude: "52.264417",
              longitude: "4.762433",
              locationType: "SupermarktPuP",
              newStore: 0,
              collectionPoint: true,
              complexNumber: "33010",
              sapStoreID: "3629",
              favourite: false,
              isHomeStore: false,
              showWarningMessage: true,
              sundayOpen: true,
            },
          ],
        })
      );
    else
      return new Promise((_, reject) => {
        reject({
          response: {
            status: 404,
            data: "Not found",
          },
        });
      });
  },
}));

describe("Actions for shop", () => {
  // successful test for getting stores
  it("fetch store data", async () => {
    mockError = false;

    // mock commit
    const commit = jest.fn();
    // make request
    await fetchData({ commit });
    // check all changes store changes
    expect(commit).toHaveBeenCalledTimes(5);
    // Loading - true
    expect(commit.mock.calls[0]).toEqual([CHANGE_LOADING_STATE, true]);
    // save stories
    expect(commit.mock.calls[1]).toEqual([
      CHANGE_STORES_STATE,
      [
        {
          uuid: "gmcKYx4X5HEAAAFIdhIYwKxK",
          addressName: "Aalsmeer Ophelialaan.",
          city: "",
          todayOpen: "08:00",
          todayClose: "22:00",
          sundayOpen: true,
        },
      ],
    ]);
    // save cities
    expect(commit.mock.calls[2]).toEqual([CHANGE_CITIES_STATE, []]);
    // save counts
    expect(commit.mock.calls[3]).toEqual([CHANGE_COUNT_STATE, {}]);
    // loading -> false
    expect(commit.mock.calls[4]).toEqual([CHANGE_LOADING_STATE, false]);
  });

  // error while request
  it("fetch store data with error", async () => {
    mockError = true;

    // mock commit
    const commit = jest.fn();
    // make request
    await fetchData({ commit });
    // check all changes store changes
    expect(commit).toHaveBeenCalledTimes(3);
    // Loading - true
    expect(commit.mock.calls[0]).toEqual([CHANGE_LOADING_STATE, true]);
    // save error
    expect(commit.mock.calls[1]).toEqual([
      CHANGE_ERROR_STATE,
      "Error code: 404. Not found",
    ]);
    // loading -> false
    expect(commit.mock.calls[2]).toEqual([CHANGE_LOADING_STATE, false]);
  });
});
