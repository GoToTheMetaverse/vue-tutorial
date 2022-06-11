import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
  {
    path: "/motion_demo",
    name: "motion_demo",
    component: () => import("../views/MotionDemoView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
