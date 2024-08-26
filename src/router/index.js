import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/players",
    name: "Home",
  },
  {
    path: "/clubs",
    name: "Clubs",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/clubs"),
  },
  {
    path: "/clubs/:id(\\d+)",
    name: "DetailClub",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/clubs/ClubDetail.vue")
  },
  {
    path: "/players",
    name: "Players",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/players"),
  },
  {
    path: "/players/list",
    name: "PlayersList",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/players/PlayersList.vue"),
  },
  {
    path: "/players/:id(\\d+)",
    name: "PlayerDetail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/players/PlayerDetail.vue"),
  },
  {
    path: "/coupons",
    name: "Coupons",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/users/Coupons.vue"),
  },
  // will match everything and put it under `route.params.pathMatch`
  { path: '/:pathMatch(.*)*', name: 'NotFound',
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NotFound.vue"),
   },
  {
    path: "/users",
    name: "Users",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/users"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
