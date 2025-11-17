import "@core/assets/css/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized,
} from "vue-router";
import { MainLayout, NotFoundPage, useStore } from "@core/index.ts";
import metadata from "./metadata";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

const store = useStore();

const mainChildren = metadata.pages.map((page) => ({
  path: page.isHomepage ? "/" : `/${page.id}`,
  component: page.component,
  name: `${page.id}`,
  beforeEnter: (
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    store.storeActivePage(page);
    next();
  },
}));

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)",
      component: NotFoundPage,
      name: "NotFound",
      beforeEnter: (to, from, next) => {
        to.meta.previousRoute = from.path;
        next();
      },
    },
    {
      path: "/",
      component: MainLayout,
      children: mainChildren,
    },
  ],
});

app.use(router);
app.mount("#app");
