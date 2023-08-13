// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "/contact-us",
        name: "contact-us",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/ContactUs.vue"),
      },
      {
        path: "/order/domain",
        name: "order-domain",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/OrderDomain.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
