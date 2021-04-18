<template>
  <div class="i18n">
    <button @click="$i18n.locale = 'en'">English</button>
    <button @click="$i18n.locale = 'zh'">中文</button>
    <div class="i18n__json">{{ $t('json') }}</div>
    <div class="i18n__json-src">{{ $t('json-src') }}</div>
    <div class="i18n__yaml">{{ $t('yaml') }}</div>
    <div class="i18n__yaml-src">{{ $t('yaml-src') }}</div>
  </div>
</template>

<i18n>
{
  "en": {
    "json": "En"
  },
  "zh": {
    "json": "中文"
  }
}
</i18n>

<i18n src="./example.json"></i18n>

<i18n lang="yaml">
en:
  yaml: 'En'
zh:
  yaml: '中文'
</i18n>

<i18n lang="yaml" src="./example.yaml"></i18n>
