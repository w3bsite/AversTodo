import Vue from "vue";
import VueRouter from "vue-router";
import routes from "../router/routes";
import goTo from "vuetify/es5/services/goto";

Vue.use(VueRouter);

const router = new VueRouter({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo, {
      duration: 850,
      offset: 650,
      easing: "linear"
    });
  },
  routes
});

export default router;
