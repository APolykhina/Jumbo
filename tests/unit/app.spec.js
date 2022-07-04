import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import App from "@/App.vue";
import { appGetters, appMutations, getters, mutations } from "@/store";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ContentVue", () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        shops: {
          state: {
            filteredValue: null,
            stores: [],
            cities: [],
            countOfStores: {},
            error: "",
            isLoading: false,
          },
          getters: getters,
          mutations: mutations,
          actions: {
            FETCH_STORES: jest.fn(),
          },
        },
        app: {
          state: {
            show: "",
          },
          getters: appGetters,
          mutations: appMutations,
        },
      },
    });
  });

  it("Render AppVue- change show info", async () => {
    const wrapper = mount(App, { store: store, localVue: localVue });
    // find cities button
    const citiesBtn = wrapper.find('[data-test="cities"]');
    expect(citiesBtn.exists()).toBe(true);
    // click cities button
    await citiesBtn.trigger("click");
    expect(store.state.app.show).toBe("cities");
    // find stores button
    const storesBtn = wrapper.find('[data-test="stores"]');
    expect(storesBtn.exists()).toBe(true);
    // click stores button
    await storesBtn.trigger("click");
    expect(store.state.app.show).toBe("stores");
  });
});
