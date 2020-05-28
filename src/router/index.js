import Vue from "vue";
import VueRouter from "vue-router";
import CesiumScene from "../views/CesiumScene.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "scene",
    component: CesiumScene
  }
];

const router = new VueRouter({
  // mode : 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
