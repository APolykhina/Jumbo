import { dataService } from "@/API";

const stores = [
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
  {
    type: "StoreListRO",
    uuid: "gssKYx4XJwoAAAFbn.BMqPTb",
    addressName: "Jumbo Aalsmeer Ophelialaan",
    street: "Ophelialaan",
    street2: "124",
    street3: "",
    city: "Aalsmeer",
    postalCode: "1431 HN",
    distance: 0,
    todayOpen: "08:00",
    todayClose: "22:00",
    latitude: "52.264417",
    longitude: "4.762433",
    locationType: "SupermarktPuP",
    newStore: 0,
    collectionPoint: true,
    complexNumber: "33010",
    sapStoreID: "3178",
    favourite: false,
    isHomeStore: false,
    showWarningMessage: true,
    sundayOpen: true,
  },
];

const structuredData = {
  cities: ["Aalsmeer"],
  stores: [
    {
      uuid: "gmcKYx4X5HEAAAFIdhIYwKxK",
      addressName: "Aalsmeer Ophelialaan.",
      city: "",
      todayOpen: "08:00",
      todayClose: "22:00",
      sundayOpen: true,
    },
    {
      uuid: "gssKYx4XJwoAAAFbn.BMqPTb",
      addressName: "Aalsmeer Ophelialaan",
      city: "Aalsmeer",
      todayOpen: "08:00",
      todayClose: "22:00",
      sundayOpen: true,
    },
  ],
  countOfStores: {
    Aalsmeer: 1,
  },
};

describe("Check data converter", () => {
  // checking service data
  it("Data converter", () => {
    const actual = dataService(stores);
    expect(actual).toEqual(structuredData);
  });
});
