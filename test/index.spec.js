import { mount, createLocalVue } from '@vue/test-utils';
import VueTrim from '../src';

describe('VueTrim', () => {
  test('works with Vue.use()', () => {
    const localVue = createLocalVue();
    localVue.use(VueTrim);

    const trim = mount({
      template: `<vue-trim />`
    }, { localVue });

    expect(trim.html()).toEqual('<img alt=\"\" src=\"\">');
  });

  test('works with Vue.component()', () => {
    const localVue = createLocalVue();
    localVue.component('vue-trim', VueTrim.VueTrim);

    const trim = mount({
      template: `<vue-trim />`
    }, { localVue });

    expect(trim.html()).toEqual('<img alt=\"\" src=\"\">');
  });
});
