import { createApp } from "vue";
import "@lauravivan/notion-portfolio/dist/notion-portfolio.css";
import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized,
} from "vue-router";
import {
  MainLayout,
  NotFoundPage,
  useStore,
  piniaInstance,
  type PageInfo,
} from "@lauravivan/notion-portfolio";
import App from "@/App.vue";
import metadata from "@/metadata";

const app = createApp(App);

const mainChildren = Object.values(metadata.pages).map((page: PageInfo) => ({
  path: page.isHomepage ? "/" : `/${page.id}`,
  component: page.component,
  name: page.id,
  beforeEnter: (
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const store = useStore;
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

app.use(router).use(piniaInstance);
app.mount("#app");
