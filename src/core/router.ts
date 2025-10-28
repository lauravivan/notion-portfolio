import { createRouter, createWebHistory } from "vue-router";
import Main from "@/core/templates/Main.vue";
import { NotFound } from "@/core/pages/index";
import store from "@/core/store";
import metadata from "@/client/metadata";
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

const mainChildren = metadata.pages.map((page) => ({
  path: page.isHomepage ? "/" : `/${page.id}`,
  component: page.component,
  name: `${page.id}`,
  beforeEnter: (
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    store.commit("storeActivePage", page);
    next();
  },
}));

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)",
      component: NotFound,
      name: "NotFound",
    },
    {
      path: "/",
      component: Main,
      children: mainChildren,
    },
  ],
});

export default router;
