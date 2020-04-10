import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { authGuard } from "../plugins/auth/authGuard";

Vue.use(VueRouter);

// tslint:disable-next-line:typedef
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: authGuard
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

// tslint:disable-next-line:typedef
const router = new VueRouter({
  routes
});

export default router;
