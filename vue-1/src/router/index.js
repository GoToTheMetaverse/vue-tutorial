import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/test1",
    name: "test1",
    component: () => import("../views/Test1View.vue"),
  },
  {
    path: "/test1com",
    name: "test1com",
    component: () => import("../views/Test1CompositionView.vue"),
  },
  {
    path: "/test1setup",
    name: "test1setup",
    component: () => import("../views/Test1SetupView.vue"),
  },
  {
    path: "/test1setup2",
    name: "test1setup2",
    component: () => import("../views/Test1Setup2View.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
