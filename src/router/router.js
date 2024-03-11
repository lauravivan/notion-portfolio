import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Contact from "@/pages/Contact.vue";
import Github from "@/pages/Github.vue";
import Project from "@/pages/Project.vue";
import Reference from "@/pages/Reference.vue";
import Main from "@/pages/Main.vue";
import store from "store";

const favorites = store.getters.getPagesInfo.favorites;

const projects = store.getters.getPagesInfo.projects;

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Main,
      children: [
        {
          path: "",
          component: Home,
          beforeEnter: (to, from, next) => {
            const aboutPage = favorites.about;
            store.commit("storeActivePage", aboutPage);
            next();
          },
        },
        {
          path: "contact",
          component: Contact,
          beforeEnter: (to, from, next) => {
            const contactPage = favorites.contact;
            store.commit("storeActivePage", contactPage);
            next();
          },
        },
        {
          path: "github",
          component: Github,
          beforeEnter: (to, from, next) => {
            const githubPage = favorites.github;
            store.commit("storeActivePage", githubPage);
            next();
          },
        },
        {
          path: "reference",
          component: Reference,
          beforeEnter: (to, from, next) => {
            const referencePage = favorites.reference;
            store.commit("storeActivePage", referencePage);
            next();
          },
        },
        {
          path: "trend-tide",
          component: Project,
          beforeEnter: (to, from, next) => {
            const trendTidePage = projects.trendTide;
            store.commit("storeActivePage", trendTidePage);
            next();
          },
        },
      ],
    },
  ],
});

export default router;
