import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import i18n_config from './config/config_i18n.js';
import store_config from './config/config_store.js';
import "vueify/lib/insert-css"
import HeaderComponent from './vue_src/Component/HeaderComponent.vue';
import Routes from './vue_src/RouteComponent/Routes.js'

document.addEventListener('DOMContentLoaded', () => {
  const accept_language = window.navigator.languages
  .map(function (elem, index, arr) {
    return elem.match(/[a-z]{2}/)[0]
  })
  .filter(function (elem, index, arr) {
    return index === arr.indexOf(elem);
  })
  .map(function (elem, index, arr) {
    return [elem, Math.round( (1 - index / arr.length) * 100 ) / 100 ];
  })
  .map(function (elem) {
    return elem[0] + ( elem[1] !== 1 ? ";q=" + elem[1] : "")
  })
  .reduce(function (acc, elem, index, arr) {
    return acc + ( index > 0 ? ", " : "" ) + elem
  }, "");

  axios.defaults.headers.common['Accept'] = 'application/json';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Accept-Language'] = accept_language;

  Vue.use(VueRouter);
  Vue.use(VueI18n);

  const routes = Routes;
  const router = new VueRouter({ routes });
  const i18n = new VueI18n({
    silentTranslationWarn: false,
    locale: 'fr',
    messages: i18n_config
  });

  const app = new Vue({
    data: function() {
      return store_config
    },
    router,
    i18n,
    components: {
      'header-component': HeaderComponent
    }
  })

  app.$data.init(function () {
    app.$mount('#app');
  });
});
