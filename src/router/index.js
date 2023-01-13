import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/add_to_glossary",
  //   name: "add_to_glossary",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AddToGlossaryView.vue"),
  // },
  {
    path: "/glossary",
    name: "glossary",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GlossaryView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
