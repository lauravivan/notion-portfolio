import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Contact from "@/pages/Contact.vue";
import Github from "@/pages/Github.vue";
import TrendTide from "@/pages/TrendTide.vue";
import Reference from "@/pages/Reference.vue";
import store from "@/store/index.js";

const router = createRouter({
  history: createWebHistory(""),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      beforeEnter: (to, from, next) => {
        const aboutPage = store.getters.getAboutPage;
        store.commit("storeActivePage", aboutPage);
        next();
      },
      props: (route) => ({
        // props go here
      }),
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
      beforeEnter: (to, from, next) => {
        const contactPage = store.getters.getContactPage;
        store.commit("storeActivePage", contactPage);
        next();
      },
    },
    {
      path: "/github",
      name: "Github",
      component: Github,
      beforeEnter: (to, from, next) => {
        const githubPage = store.getters.getGithubPage;
        store.commit("storeActivePage", githubPage);
        next();
      },
    },
    {
      path: "/reference",
      name: "Reference",
      component: Reference,
      beforeEnter: (to, from, next) => {
        const referencePage = store.getters.getReferencePage;
        store.commit("storeActivePage", referencePage);
        next();
      },
    },
    {
      path: "/trend-tide",
      name: "TrendTide",
      component: TrendTide,
      beforeEnter: (to, from, next) => {
        const trendTidePage = store.getters.getTrendTidePage;
        store.commit("storeActivePage", trendTidePage);
        next();
      },
    },
  ],
});

export default router;
