<template>
  <img
    ref="img"
    :alt="alt"
    :src="src"
  />
</template>

<script>
import Cropper from 'cropperjs';

const tagValues = [
  'img',
  'canvas'
];

const viewModeValues = [
  0, // no restrictions
  1, // restrict the crop box to not exceed the size of the canvas.
  2, // restrict the minimum canvas size to fit within the container. If the proportions of the canvas and the container differ, the minimum canvas will be surrounded by extra space in one of the dimensions.
  3  // restrict the minimum canvas size to fill fit the container. If the proportions of the canvas and the container are different, the container will not be able to fit the whole canvas in one of the dimensions.
];

const dragModeValues = [
  'crop', // create a new crop box
  'move', // move the canvas
  'none'  // do nothing
];

export default {
  name: 'VueTrim',
  props: {
    src: {
      default: '',
      type: String
    },
    alt: {
      default: '',
      type: String
    },
    viewMode: {
      default: 0,
      type: Number,
      validator: value => viewModeValues.includes(value)
    },
    dragMode: {
      default: 'crop',
      type: String,
      validator: value => dragModeValues.includes(value)
    }
  },
  watch: {
    src() {
      this.initialize();
    }
  },
  mounted() {
    this.initialize();
  },
  methods: {
    initialize() {
      const {
        viewMode,
        dragMode
      } = this;

      const cropper = new Cropper(this.$refs.img, {
        viewMode,
        dragMode
      });
    }
  }
};
</script>
