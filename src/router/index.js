import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Card from "../components/Card.vue";
import AnimeDetail from "../views/AnimeDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/favoritos",
    name: "Favoritos",
    component: () => import(/* webpackChunkName: "favoritos" */ "../views/Favoritos.vue"),
  },
  {
    path: "/cards/",
    name: "Card",
    component: Card,
    children: [
    ],
  },
  { path: "/cards/:cardId", name: "AnimeDetail", component: AnimeDetail },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
