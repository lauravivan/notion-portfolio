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
import { pagesInfo, tabs, activeTab, setTabs, setActiveTab } from "util/util";
import { setGlobalProperties, setGlobalProperty } from "global";

function storeInfo(page) {
  let index = activeTab ? activeTab : 0;

  tabs[index] = page;

  store.commit("storeActivePage", page);
  setGlobalProperties(page);

  setGlobalProperty("tabs", tabs);
  setGlobalProperty("activeTab", index);
  setTabs(tabs);
  setActiveTab(index);
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
          beforeEnter: (to, from, next) => {
            storeInfo(pagesInfo.about);
            next();
          },
        },
        {
          path: "contact",
          component: Contact,
          beforeEnter: (to, from, next) => {
            storeInfo(pagesInfo.contact);
            next();
          },
        },
        {
          path: "github",
          component: Github,
          beforeEnter: (to, from, next) => {
            storeInfo(pagesInfo.github);
            next();
          },
        },
        {
          path: "reference",
          component: Reference,
          beforeEnter: (to, from, next) => {
            storeInfo(pagesInfo.reference);
            next();
          },
        },
        {
          path: "projects",
          component: Projects,
          beforeEnter: (to, from, next) => {
            storeInfo(pagesInfo.projects);
            next();
          },
        },
        {
          path: "/projects/:id",
          component: Project,
          beforeEnter: (to, from, next) => {
            const id = to.params.id;
            storeInfo(pagesInfo.projects.pages[id]);
            next();
          },
        },
        {
          path: "/github/:id",
          component: Repo,
          beforeEnter: (to, from, next) => {
            const id = to.params.id;
            storeInfo(pagesInfo.github.pages[id]);
            next();
          },
        },
      ],
    },
  ],
});

export default router;
