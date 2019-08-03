import { mount, createLocalVue } from '@vue/test-utils';
import Cropper from 'cropperjs';
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

  test('has cropper instance', () => {
    const localVue = createLocalVue();
    localVue.use(VueTrim);

    const { vm } = mount({
      template: `<vue-trim ref="trim" />`
    }, { localVue });

    expect(vm).toBeDefined();
    expect(vm.$refs.trim).toBeDefined();
    expect(vm.$refs.trim.cropper).toBeInstanceOf(Cropper);
  });

  test('has functions', () => {
    const localVue = createLocalVue();
    localVue.use(VueTrim);

    const { vm } = mount({
      template: `<vue-trim ref="trim" />`
    }, { localVue });

    expect(vm.$refs.trim.getData).toBeDefined();
    expect(vm.$refs.trim.setData).toBeDefined();
    expect(vm.$refs.trim.getContainerData).toBeDefined();
    expect(vm.$refs.trim.getImageData).toBeDefined();
    expect(vm.$refs.trim.getImageData).toBeDefined();
    expect(vm.$refs.trim.getCanvasData).toBeDefined();
    expect(vm.$refs.trim.setCanvasData).toBeDefined();
    expect(vm.$refs.trim.getCropBoxData).toBeDefined();
    expect(vm.$refs.trim.setCropBoxData).toBeDefined();
    expect(vm.$refs.trim.getCroppedCanvas).toBeDefined();
    expect(vm.$refs.trim.setAspectRatio).toBeDefined();
    expect(vm.$refs.trim.setDragMode).toBeDefined();
  });
});
