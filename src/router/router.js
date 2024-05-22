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
import { setGlobalSettings } from "global";

function storeInfo(page) {
  store.commit("storeActivePage", page);
  setGlobalSettings(page);
}

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
          name: "about",
          beforeEnter: (to, from, next) => {
            const pages = JSON.parse(localStorage.getItem("pagesInfo"));
            storeInfo(pages.about);
            next();
          },
        },
        {
          path: "contact",
          component: Contact,
          name: "contact",
          beforeEnter: (to, from, next) => {
            const pages = JSON.parse(localStorage.getItem("pagesInfo"));
            storeInfo(pages.contact);
            next();
          },
        },
        {
          path: "github",
          component: Github,
          name: "github",
          beforeEnter: (to, from, next) => {
            const pages = JSON.parse(localStorage.getItem("pagesInfo"));
            storeInfo(pages.github);
            next();
          },
        },
        {
          path: "reference",
          component: Reference,
          name: "reference",
          beforeEnter: (to, from, next) => {
            const pages = JSON.parse(localStorage.getItem("pagesInfo"));
            storeInfo(pages.reference);
            next();
          },
        },
        {
          path: "projects",
          component: Projects,
          name: "projects",
          beforeEnter: (to, from, next) => {
            const pages = JSON.parse(localStorage.getItem("pagesInfo"));
            storeInfo(pages.projects);
            next();
          },
        },
        {
          path: "/projects/:id",
          component: Project,
          name: "project",
          props: function (to) {
            const id = to.params.id;
            const pages = JSON.parse(localStorage.getItem("pagesInfo"));

            to.meta.params = {
              page: pages.projects.pages[id],
            };

            return to.meta.params;
          },
          beforeEnter: (to, from, next) => {
            const id = to.params.id;
            const pages = JSON.parse(localStorage.getItem("pagesInfo"));
            storeInfo(pages.projects.pages[id]);
            next();
          },
        },
        {
          path: "/github/:id",
          component: Repo,
          name: "repo",
          props: function (to) {
            const id = to.params.id;
            const pages = JSON.parse(localStorage.getItem("pagesInfo"));

            to.meta.params = {
              page: pages.github.pages[id],
            };

            return to.meta.params;
          },
          beforeEnter: (to, from, next) => {
            const id = to.params.id;
            const pages = JSON.parse(localStorage.getItem("pagesInfo"));
            storeInfo(pages.github.pages[id]);
            next();
          },
        },
      ],
    },
  ],
});

export default router;
