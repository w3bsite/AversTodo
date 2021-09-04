import axios from "axios";

import Vue from "vue";
Vue.prototype.$url = "https://corvirus.herokuapp.com/products";
Vue.prototype.$urlroot = "https://corvirus.herokuapp.com";
Vue.prototype.$urllog = "https://corvirus.herokuapp.com/connect/google";

Vue.prototype.$axios = axios.create({});
Vue.prototype.$user = axios.create({
  baseURL: "https://averstodo-default-rtdb.asia-southeast1.firebasedatabase.app/users/"
});
Vue.prototype.$axiosqs = axios.create({
  baseURL: "https://corvirus.herokuapp.com/products"
  // paramsSerializer: params => {
  //   return qs.stringify(params);
  // }
});
