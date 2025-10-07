import { createRouter, createWebHistory } from "vue-router";
import Contact from "@/pages/Contact.vue";
import Github from "@/pages/Github.vue";
import Project from "@/pages/Project.vue";
import Reference from "@/pages/Reference.vue";
import Projects from "@/pages/Projects.vue";
import About from "@/pages/About.vue";
import Repo from "@/pages/Repo.vue";
import NotFound from "@/pages/NotFound.vue";
import store from "@/store";
import Certifications from "@/pages/Certifications.vue";
import Honors from "@/pages/Honors.vue";
import Publications from "@/pages/Publications.vue";
import { computed } from "vue";
import createAsyncPage from "./util/createAsyncPage";
import createPage from "./util/createPage";
import Freelance from "./pages/Freelance.vue";
import Articles from "./pages/Articles.vue";
import Courses from "./pages/Courses.vue";
import Main from "./templates/Main.vue";
import Events from "./pages/Events.vue";
import College from "./pages/College.vue";

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
          path: "certifications",
          component: Certifications,
          name: "certifications",
          beforeEnter: (_to, _from, next) => {
            storeActivePage(pages.value.certifications);
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
        {
          path: "freelance",
          component: Freelance,
          name: "freelance",
          beforeEnter: (_to, _from, next) => {
            storeActivePage(pages.value.freelance);
            next();
          },
        },
        {
          path: "articles",
          component: Articles,
          name: "articles",
          beforeEnter: (_to, _from, next) => {
            storeActivePage(pages.value.articles);
            next();
          },
        },
        {
          path: "courses",
          component: Courses,
          name: "courses",
          beforeEnter: (_to, _from, next) => {
            storeActivePage(pages.value.courses);
            next();
          },
        },
        {
          path: "events",
          component: Events,
          name: "events",
          beforeEnter: (_to, _from, next) => {
            storeActivePage(pages.value.events);
            next();
          },
        },
        {
          path: "college",
          component: College,
          name: "college",
          beforeEnter: (_to, _from, next) => {
            storeActivePage(pages.value.college);
            next();
          },
        },
      ],
    },
  ],
});

export default router;
