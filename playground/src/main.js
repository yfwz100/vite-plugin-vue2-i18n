import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Example from './Example.vue';

Vue.use(VueI18n);

new Vue({
  render: (h) => h(Example),
  i18n: new VueI18n({
    locale: 'zh',
  }),
}).$mount('#app');
