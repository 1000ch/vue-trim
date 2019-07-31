# vue-trim

> Vue.js component for trimming images using [Cropper.js](https://github.com/fengyuanchen/cropperjs)

[![Build Status](https://travis-ci.org/1000ch/vue-trim.svg?branch=master)](https://travis-ci.org/1000ch/vue-trim)
[![NPM version](https://badge.fury.io/js/vue-trim.svg)](http://badge.fury.io/js/vue-trim)
[![Dependency Status](https://david-dm.org/1000ch/vue-trim.svg)](https://david-dm.org/1000ch/vue-trim)
[![devDependency Status](https://david-dm.org/1000ch/vue-trim/dev-status.svg)](https://david-dm.org/1000ch/vue-trim?type=dev)

## Install

```sh
npm install --save vue-trim
```

## Usage

You can use `<vue-trim>` component after importing and registering `VueTrim`.

```html
<template>
  <vue-trim></vue-trim>
</template>

<script>
import { VueTrim } from 'vue-trim';

export default {
  components: {
    VueTrim
  }
};
</script>
```

You can also register it as global component.

```javascript
import Vue from 'vue';
import { VueTrim } from 'vue-trim';

Vue.component('vue-trim', VueTrim);
```

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
