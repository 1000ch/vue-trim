import VueTrim from './VueTrim.vue';

function install(Vue, options) {
  Vue.component('vue-trim', VueTrim);
};

export default {
  install,
  VueTrim
};
