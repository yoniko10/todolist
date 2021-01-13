import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Xd from "../views/Xd.vue";
import Todo from "../views/Todo.vue";

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
    path: "/xd",
    name:"Xd",
    component: Xd,
  },
  {
    path: "/todo",
    name:"Todo",
    component: Todo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;