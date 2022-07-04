import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import Cities from "@/components/containers/Cities.vue";
import { getters, mutations } from "@/store";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ContentVue", () => {
  let store;
  const mockState = {
    filteredValue: "sdsd",
    stores: [
      {
        uuid: "some uuid",
        addressName: "Some address",
        city: "Amsterdam",
        todayOpen: "08:00",
        todayClose: "22:00",
        sundayOpen: true,
      },
    ],
    cities: ["Amsterdam"],
    countOfStores: {
      Amsterdam: 1,
    },
  };

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        shops: {
          state: mockState,
          getters: getters,
          mutations: mutations,
        },
      },
    });
  });

  it("Render CitiesVue - beforeMount", () => {
    const spy = jest.spyOn(Cities, "beforeMount");
    mount(Cities, { store: store, localVue: localVue });
    // Before Mount function called
    expect(spy).toBeCalled();
  });

  it("Render CitiesVue - change filtered value", async () => {
    const wrapper = mount(Cities, { store: store, localVue: localVue });
    // check cities
    const cities = wrapper.find('[data-test="cities"]');
    expect(cities.exists()).toBe(true);
    // check stores
    expect(wrapper.find('[data-test="stores"]').exists()).toBe(false);
    // click on the city
    const city = cities.find('[id="Amsterdam"]');
    expect(city.exists()).toBe(true);
    await city.trigger("click");
    // check stores
    expect(wrapper.find('[data-test="stores"]').exists()).toBe(true);
  });
});
