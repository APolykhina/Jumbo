import { mount } from "@vue/test-utils";
import Shop from "../../../src/components/views/Shop.vue";

const shopWithCity = {
  uuid: "gssKYx4XJwoAAAFbn.BMqPTb",
  addressName: "Aalsmeer Ophelialaan",
  city: "Aalsmeer",
  todayOpen: "08:00",
  todayClose: "22:00",
  sundayOpen: true,
};

const shopWithoutCity = {
  uuid: "gssKYx4XJwoAAAFbn.BMqPTb",
  addressName: "Aalsmeer Ophelialaan",
  city: "",
  todayOpen: "08:00",
  todayClose: "22:00",
  sundayOpen: false,
};

describe("ShopVue", () => {
  // with city and sunday open
  it("Render shop with city", () => {
    const wrapper = mount(Shop, {
      propsData: {
        shop: shopWithCity,
      },
    });
    // check address
    expect(wrapper.get('[data-test="shop-address"]').text()).toBe(
      shopWithCity.addressName
    );
    // check time
    expect(wrapper.get('[data-test="shop-time"]').text()).toBe(
      `Open: ${shopWithCity.todayOpen} - ${shopWithCity.todayClose}`
    );
    // check city
    expect(wrapper.get('[data-test="shop-city"]').text()).toBe(
      `City: ${shopWithCity.city}`
    );
    // check element -> sunday open
    expect(wrapper.find('[data-test="shop-open"]').exists()).toBe(true);
    // check element -> sunday open
    expect(wrapper.find('[data-test="shop-close"]').exists()).toBe(false);
  });

  // without city and sunday close
  it("Render shop with city", () => {
    const wrapper = mount(Shop, {
      propsData: {
        shop: shopWithoutCity,
      },
    });
    // check address
    expect(wrapper.get('[data-test="shop-address"]').text()).toBe(
      shopWithCity.addressName
    );
    // check time
    expect(wrapper.get('[data-test="shop-time"]').text()).toBe(
      `Open: ${shopWithCity.todayOpen} - ${shopWithCity.todayClose}`
    );
    // check city
    expect(wrapper.find('[data-test="shop-city"]').exists()).toBe(false);
    // check element -> sunday open
    expect(wrapper.find('[data-test="shop-open"]').exists()).toBe(false);
    // check element -> sunday open
    expect(wrapper.find('[data-test="shop-close"]').exists()).toBe(true);
  });
});
