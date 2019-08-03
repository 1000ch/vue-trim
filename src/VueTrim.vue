<template>
  <img
    ref="img"
    :alt="alt"
    :src="src"
  />
</template>

<script>
import Cropper from 'cropperjs';

const cropperOptions = [
  'viewMode',
  'dragMode',
  'initialAspectRatio',
  'aspectRatio',
  'data',
  'responsive',
  'restore',
  'checkCrossOrigin',
  'checkOrientation',
  'modal',
  'guides',
  'center',
  'highlight',
  'background',
  'autoCrop',
  'autoCropArea',
  'movable',
  'rotatable',
  'scalable',
  'zoomable',
  'zoomOnTouch',
  'zoomOnWheel',
  'wheelZoomRatio',
  'cropBoxMovable',
  'cropBoxResizable',
  'toggleDragModeOnDblclick',
  'minContainerWidth',
  'minContainerHeight',
  'minCanvasWidth',
  'minCanvasHeight',
  'minCropBoxWidth',
  'minCropBoxHeight',
  'ready',
  'cropstart',
  'cropmove',
  'cropend',
  'crop',
  'zoom'
];

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
    },
    initialAspectRatio: {
      default: NaN,
      type: Number
    },
    aspectRatio: {
      default: NaN,
      type: Number
    },
    data: {
      default: {},
      type: Object
    },
    responsive: {
      default: true,
      type: Boolean
    },
    restore: {
      default: true,
      type: Boolean
    },
    checkCrossOrigin: {
      default: true,
      type: Boolean
    },
    checkOrientation: {
      default: true,
      type: Boolean
    },
    modal: {
      default: true,
      type: Boolean
    },
    guides: {
      default: true,
      type: Boolean
    },
    center: {
      default: true,
      type: Boolean
    },
    highlight: {
      default: true,
      type: Boolean
    },
    background: {
      default: true,
      type: Boolean
    },
    autoCrop: {
      default: true,
      type: Boolean
    },
    autoCropArea: {
      default: 0.8,
      type: Number,
      validator: value => 0 <= value && value <= 1
    },
    movable: {
      default: true,
      type: Boolean
    },
    rotatable: {
      default: true,
      type: Boolean
    },
    scalable: {
      default: true,
      type: Boolean
    },
    zoomable: {
      default: true,
      type: Boolean
    },
    zoomOnTouch: {
      default: true,
      type: Boolean
    },
    zoomOnWheel: {
      default: true,
      type: Boolean
    },
    wheelZoomRatio: {
      default: 0.8,
      type: Number
    },
    cropBoxMovable: {
      default: true,
      type: Boolean
    },
    cropBoxResizable: {
      default: true,
      type: Boolean
    },
    toggleDragModeOnDblclick: {
      default: true,
      type: Boolean
    },
    minContainerWidth: {
      default: 200,
      type: Number
    },
    minContainerHeight: {
      default: 100,
      type: Number
    },
    minCanvasWidth: {
      default: 0,
      type: Number
    },
    minCanvasHeight: {
      default: 0,
      type: Number
    },
    minCropBoxWidth: {
      default: 0,
      type: Number
    },
    minCropBoxHeight: {
      default: 0,
      type: Number
    }
  },
  data() {
    return {
      cropper: null
    };
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
      if (this.cropper !== null) {
        this.cropper.destroy();
      }

      const options = {};
      for (const cropperOption of cropperOptions) {
        options[cropperOption] = this[cropperOption];
      }

      this.cropper = new Cropper(this.$refs.img, options);
    },
    getData(rounded) {
      return this.cropper.getData(rounded);
    },
    setData(data) {
      this.cropper.setData(data);
    },
    getContainerData() {
      return this.cropper.getContainerData();
    },
    getImageData() {
      return this.cropper.getImageData();
    },
    getCanvasData() {
      return this.cropper.getCanvasData();
    },
    setCanvasData(data) {
      this.cropper.setCanvasData(data);
    },
    getCropBoxData() {
      return this.cropper.getCropBoxData();
    },
    setCropBoxData(data) {
      this.cropper.setCropBoxData(data);
    },
    getCroppedCanvas(options) {
      return this.cropper.getCroppedCanvas(options);
    },
    setAspectRatio(aspectRatio) {
      this.cropper.setAspectRatio(aspectRatio);
    },
    setDragMode(mode) {
      this.cropper.setDragMode(mode);
    },
    ready(e) {
      this.$emit('ready', e);
    },
    cropstart(e) {
      this.$emit('cropstart', e);
    },
    cropmove(e) {
      this.$emit('cropmove', e);
    },
    cropend(e) {
      this.$emit('cropend', e);
    },
    crop(e) {
      this.$emit('crop', e);
    },
    zoom(e) {
      this.$emit('zoom', e);
    }
  }
};
</script>
