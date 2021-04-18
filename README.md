# @yfwz100/vite-plugin-vue2-i18n

The missing vue 2 SFC version of vite plugin for vue-i18n, inspired by [the rollup one](https://github.com/intlify/rollup-plugin-vue-i18n/tree/master).

## Requirement

You need to install the follwoing:

- [@yfwz100/vite-plugin-vue2@1.4.3-3][] or later
- vite 2

Note: as of 2021.4, the original [vite-plugin-vue2][] plugin doesn't parse the custom blocks correctly, so you need to use a fork like [@yfwz100/vite-plugin-vue2][].

## Installation

npm:

```sh
$ npm i --save-dev @rollup/plugin-json
$ npm i --save-dev @rollup/plugin-yaml # if you use locale messages with YAML format
$ npm i --save-dev @intlify/rollup-plugin-vue-i18n
```

## Usages

Say we have configured the vite via `vite.config.js` and have a sample index.html (see the [vite guide](https://vitejs.dev/guide/)):

```js
import { defineConfig } from 'vite';
import { createVuePlugin } from '@yfwz100/vite-plugin-vue2';
import { createI18nPlugin } from '@yfwz100/vite-plugin-vue2-i18n';

export default defineConfig({
  plugins: [createVuePlugin(), createI18nPlugin()],
});
```

Then, we can write the i18n blocks in the vue component file:

```vue
<template>
  <p>{{ $t('hello') }}</p>
</template>

<i18n>
{
  "en": {
    "hello": "Hello World!"
  },
  "zh": {
    "hello": "你好，世界！"
  }
}
</i18n>
```

Finally, just run `vite` and see the component with i18n enabled.

### Locale Messages Format

We have tested the following formats:

- json (default)
- yaml (via [@rollup/plugin-yaml](https://www.npmjs.com/package/@rollup/plugin-yaml))

See more in the `playground` folder.

## Changelog

See [CHANGELOG.md](https://github.com/yfwz100/vite-plugin-vue2-i18n/blob/master/CHANGELOG.md).

[vite-plugin-vue2]: https://www.npmjs.com/package/vite-plugin-vue2 'the original vite-plugin-vue2'
[@yfwz100/vite-plugin-vue2]: https://www.npmjs.com/package/@yfwz100/vite-plugin-vue2 'the fork of vite-plugin-vue2'
