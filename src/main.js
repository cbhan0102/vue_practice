import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store';
import VueGallerySlideshow from 'vue-gallery-slideshow'

Vue.config.productionTip = false

new Vue({
  store,
  VueGallerySlideshow,
  vuetify,
  render: h => h(App)
}).$mount('#app')
