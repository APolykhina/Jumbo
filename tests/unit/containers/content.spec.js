import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import Content from "@/components/containers/Content.vue";
import { appGetters, getters, mutations } from "@/store";

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
        },
      },
    });
  });

  it("Render contentVue - beforeMount", () => {
    const spy = jest.spyOn(Content, "beforeMount");
    mount(Content, { store: store, localVue: localVue });
    // Before Mount function called
    expect(spy).toBeCalled();
  });

  it("Render contentVue - render loading", () => {
    store.state.shops.isLoading = true;
    const wrapper = mount(Content, {
      store: store,
      localVue: localVue,
    });
    // check element -> stores
    expect(wrapper.find('[data-test="stores"]').exists()).toBe(false);
    // check element -> loading
    expect(wrapper.find('[data-test="loading"]').exists()).toBe(true);
    // check element -> error
    expect(wrapper.find('[data-test="error"]').exists()).toBe(false);
    // check element -> cities
    expect(wrapper.find('[data-test="cities"]').exists()).toBe(false);
  });

  it("Render contentVue - render error", () => {
    store.state.shops.error = "Any error";
    const wrapper = mount(Content, {
      store: store,
      localVue: localVue,
    });
    // check element -> stores
    expect(wrapper.find('[data-test="stores"]').exists()).toBe(false);
    // check element -> loading
    expect(wrapper.find('[data-test="loading"]').exists()).toBe(false);
    // check element -> error
    expect(wrapper.find('[data-test="error"]').exists()).toBe(true);
    // check element -> cities
    expect(wrapper.find('[data-test="cities"]').exists()).toBe(false);
  });

  it("Render contentVue - render shops", () => {
    store.state.app.show = "stores";
    const wrapper = mount(Content, {
      store: store,
      localVue: localVue,
    });
    // check element -> stores
    expect(wrapper.find('[data-test="stores"]').exists()).toBe(true);
    // check element -> loading
    expect(wrapper.find('[data-test="loading"]').exists()).toBe(false);
    // check element -> error
    expect(wrapper.find('[data-test="error"]').exists()).toBe(false);
    // check element -> cities
    expect(wrapper.find('[data-test="cities"]').exists()).toBe(false);
  });

  it("Render contentVue - render cities", () => {
    store.state.app.show = "cities";
    const wrapper = mount(Content, {
      store: store,
      localVue: localVue,
    });
    // check element -> stores
    expect(wrapper.find('[data-test="stores"]').exists()).toBe(false);
    // check element -> loading
    expect(wrapper.find('[data-test="loading"]').exists()).toBe(false);
    // check element -> error
    expect(wrapper.find('[data-test="error"]').exists()).toBe(false);
    // check element -> cities
    expect(wrapper.find('[data-test="cities"]').exists()).toBe(true);
  });
});
