import { createRouter, createWebHistory } from "vue-router";
import Contact from "@/pages/Contact.vue";
import Github from "@/pages/Github.vue";
import Project from "@/pages/Project.vue";
import Reference from "@/pages/Reference.vue";
import Projects from "@/pages/Projects.vue";
import Home from "@/pages/Home.vue";
import Repo from "@/pages/Repo.vue";
import Main from "@/pages/Main.vue";
import NotFound from "@/pages/NotFound.vue";
import store from "store";
import { pagesInfo } from "util/util";
import { setGlobalProperties } from "global";

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
      children: [
        {
          path: "",
          component: Home,
          beforeEnter: (to, from, next) => {
            store.commit("storeActivePage", pagesInfo.about);
            setGlobalProperties(pagesInfo.about);
            next();
          },
        },
        {
          path: "contact",
          component: Contact,
          beforeEnter: (to, from, next) => {
            store.commit("storeActivePage", pagesInfo.contact);
            setGlobalProperties(pagesInfo.contact);
            next();
          },
        },
        {
          path: "github",
          component: Github,
          beforeEnter: (to, from, next) => {
            store.commit("storeActivePage", pagesInfo.github);
            setGlobalProperties(pagesInfo.github);
            next();
          },
        },
        {
          path: "reference",
          component: Reference,
          beforeEnter: (to, from, next) => {
            store.commit("storeActivePage", pagesInfo.reference);
            setGlobalProperties(pagesInfo.reference);
            next();
          },
        },
        {
          path: "projects",
          component: Projects,
          beforeEnter: (to, from, next) => {
            store.commit("storeActivePage", pagesInfo.projects);
            setGlobalProperties(pagesInfo.projects);
            next();
          },
        },
        {
          path: "/projects/:id",
          component: Project,
          beforeEnter: (to, from, next) => {
            const id = to.params.id;

            store.commit("storeActivePage", pagesInfo.projects.pages[id]);
            setGlobalProperties(pagesInfo.projects.pages[id]);
            next();
          },
        },
        {
          path: "/github/:id",
          component: Repo,
          beforeEnter: (to, from, next) => {
            const id = to.params.id;

            store.commit("storeActivePage", pagesInfo.github.pages[id]);
            setGlobalProperties(pagesInfo.github.pages[id]);
            next();
          },
        },
      ],
    },
  ],
});

export default router;
