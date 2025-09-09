import { createRouter, createWebHistory } from "vue-router";
import Contact from "@/pages/Contact.vue";
import Github from "@/pages/Github.vue";
import Project from "@/pages/Project.vue";
import Reference from "@/pages/Reference.vue";
import Projects from "@/pages/Projects.vue";
import About from "@/pages/About.vue";
import Repo from "@/pages/Repo.vue";
import Main from "@/pages/Main.vue";
import NotFound from "@/pages/NotFound.vue";
import store from "@/store";
import Certificates from "@/pages/Certificates.vue";
import Honors from "@/pages/Honors.vue";
import Publications from "@/pages/Publications.vue";
import { computed } from "vue";
import createAsyncPage from "./util/createAsyncPage";
import createPage from "./util/createPage";

function storeActivePage(page: Page) {
  store.commit("storeActivePage", page);
}

const pages = computed(() => store.getters.getPages);
const theme = computed(() => store.getters.getTheme);

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
          path: "about",
          component: About,
          name: "about",
          beforeEnter: (_to, _from, next) => {
            storeActivePage(pages.value.about);
            next();
          },
        },
        {
          path: "",
          component: About,
          name: "homepage",
          beforeEnter: (_to, _from, next) => {
            storeActivePage(pages.value.about);
            next();
          },
        },
        {
          path: "contact",
          component: Contact,
          name: "contact",
          beforeEnter: (_to, _from, next) => {
            storeActivePage(pages.value.contact);
            next();
          },
        },
        {
          path: "github",
          component: Github,
          name: "github",
          beforeEnter: async (_to, _from, next) => {
            const page = pages.value.github;

            const newPage = await createAsyncPage(
              {
                id: page.id,
                name: page.name,
              },
              theme.value
            );

            store.commit("updatePages", {
              id: "github",
              page: newPage,
            });

            storeActivePage(newPage);
            next();
          },
        },
        {
          path: "reference",
          component: Reference,
          name: "reference",
          beforeEnter: (_to, _from, next) => {
            storeActivePage(pages.value.reference);
            next();
          },
        },
        {
          path: "projects",
          component: Projects,
          name: "projects",
          beforeEnter: async (_to, _from, next) => {
            const page = pages.value.projects;

            const newPage = createPage(
              {
                id: page.id,
                name: page.name,
              },
              theme.value
            );

            store.commit("updatePages", {
              id: "projects",
              page: newPage,
            });

            storeActivePage(newPage);
            next();
          },
        },
        {
          path: "/projects/:id",
          component: Project,
          name: "project",
          props: function (to) {
            const id = to.params.id;

            const proj = pages.value.projects.pages.find(
              (proj: any) => proj.id === id
            );

            to.meta.params = {
              page: proj,
            };

            return to.meta.params;
          },
          beforeEnter: (to, _from, next) => {
            const id = to.params.id;

            const proj = pages.value.projects.pages.find(
              (proj: any) => proj.id === id
            );

            if (proj) {
              storeActivePage(proj);
              next();
            }

            next("/not-found");
          },
        },
        {
          path: "/github/:id",
          component: Repo,
          name: "repo",
          props: function (to) {
            const id = to.params.id;

            const repo = pages.value.github.pages.find(
              (repo: any) => repo.id === id
            );

            to.meta.params = {
              page: repo,
            };

            return to.meta.params;
          },
          beforeEnter: (to, _from, next) => {
            const id = to.params.id;

            const repo = pages.value.github.pages.find(
              (repo: any) => repo.id === id
            );

            if (repo) {
              storeActivePage(repo);
              next();
            }

            next("/not-found");
          },
        },
        {
          path: "certificates",
          component: Certificates,
          name: "certificates",
          beforeEnter: (_to, _from, next) => {
            storeActivePage(pages.value.certificates);
            next();
          },
        },
        {
          path: "honors-and-awards",
          component: Honors,
          name: "honors",
          beforeEnter: (_to, _from, next) => {
            storeActivePage(pages.value.honors);
            next();
          },
        },
        {
          path: "publications",
          component: Publications,
          name: "publications",
          beforeEnter: (_to, _from, next) => {
            storeActivePage(pages.value.publications);
            next();
          },
        },
      ],
    },
  ],
});

export default router;
