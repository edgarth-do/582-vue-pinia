import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import VendorView from "../views/VendorView.vue";
import InventoryView from "../views/InventoryView.vue";
import ConsumerView from "../views/ConsumerView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/vendor",
    name: "vendor",
    component: VendorView,
  },
  {
    path: "/inventory",
    name: "inventory",
    component: InventoryView,
  },
  {
    path: "/consumer",
    name: "consumer",
    component: ConsumerView,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
