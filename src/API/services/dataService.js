export const dataService = (fetchedData) => {
  // collect cities
  const countOfStores = {};
  const cities = [
    ...new Set(
      fetchedData
        .filter((store) => store.city)
        .map((store) => {
          countOfStores[store.city] = (countOfStores[store.city] || 0) + 1;
          return store.city;
        })
    ),
  ];
  // collect stores
  const stores = fetchedData.map((store) => ({
    addressName: store.addressName.replace("Jumbo ", ""),
    uuid: store.uuid,
    city: store.city,
    todayOpen: store.todayOpen,
    todayClose: store.todayClose,
    sundayOpen: store.sundayOpen,
  }));
  // return prepared data
  return { cities: cities, stores: stores, countOfStores: countOfStores };
};
