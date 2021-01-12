import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Xd from "../views/Xd.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/xd/:id",
    name:"Xd",
    component: Xd,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;