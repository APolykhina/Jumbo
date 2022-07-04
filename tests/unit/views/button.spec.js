import { mount } from "@vue/test-utils";
import Button from "../../../src/components/views/Button.vue";

describe("ButtonVue", () => {
  it("Render button with corresponding name", () => {
    const wrapper = mount(Button, {
      propsData: { infoName: "Show cities" },
    });
    expect(wrapper.text()).toBe("Show cities");
    expect(wrapper.props().infoName).toBe("Show cities");
  });
});
