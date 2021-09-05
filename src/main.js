import Vue from "vue";
import App from "./App.vue";
import router from "./router";
 
import vuetify from "./plugins/vuetify";
import "./plugins/axios";
const VueReactiveCookie = require('vue-reactive-cookie');
Vue.use(VueReactiveCookie);

Vue.config.productionTip = false;

new Vue({
  router,
 
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
 