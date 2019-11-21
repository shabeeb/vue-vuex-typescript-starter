import { shallowMount, createLocalVue } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import vuetify from 'vuetify';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Hello World';
    const localVue = createLocalVue();
    localVue.use(vuetify);
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
