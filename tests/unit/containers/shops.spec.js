import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import Shops from "../../../src/components/containers/Shops.vue";
import { getters, mutations } from "../../../src/store";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ContentVue", () => {
  let store;
  const mockState = {
    filteredValue: null,
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

  it("Render ShopsVue - beforeMount", () => {
    const spy = jest.spyOn(Shops, "beforeMount");
    mount(Shops, { store: store, localVue: localVue });
    // Before Mount function called
    expect(spy).toBeCalled();
  });

  it("Render ShopsVue - change filtered value", async () => {
    const wrapper = mount(Shops, { store: store, localVue: localVue });
    // get input field -> null value
    const input = wrapper.find('[data-test="filter"]');
    expect(input.element.value).toBe("");
    // check stores renders
    expect(wrapper.find('[data-test="stores"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="not-stores"]').exists()).toBe(false);
    // change filter
    input.element.value = "Amsterdam";
    await input.trigger("input");
    // check new filter and stores
    expect(input.element.value).toBe("Amsterdam");
    expect(wrapper.find('[data-test="stores"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="not-stores"]').exists()).toBe(false);
    // change filter
    input.element.value = "Incorrect value";
    await input.trigger("input");
    // check new filter and stores
    expect(input.element.value).toBe("Incorrect value");
    expect(wrapper.find('[data-test="not-stores"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="stores"]').exists()).toBe(false);
  });
});
