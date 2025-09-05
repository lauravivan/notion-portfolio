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

function storeActivePage(page: Page) {
  store.commit("storeActivePage", page);
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
          path: "about",
          component: About,
          name: "about",
          beforeEnter: (_to, _from, next) => {
            const pages = computed(() => store.getters.getPages);
            storeActivePage(pages.value.about);
            next();
          },
        },
        {
          path: "",
          component: About,
          name: "homepage",
          beforeEnter: (_to, _from, next) => {
            const pages = computed(() => store.getters.getPages);
            storeActivePage(pages.value.about);
            next();
          },
        },
        {
          path: "contact",
          component: Contact,
          name: "contact",
          beforeEnter: (_to, _from, next) => {
            const pages = computed(() => store.getters.getPages);
            storeActivePage(pages.value.contact);
            next();
          },
        },
        {
          path: "github",
          component: Github,
          name: "github",
          beforeEnter: (_to, _from, next) => {
            const pages = computed(() => store.getters.getPages);
            storeActivePage(pages.value.github);
            next();
          },
        },
        {
          path: "reference",
          component: Reference,
          name: "reference",
          beforeEnter: (_to, _from, next) => {
            const pages = computed(() => store.getters.getPages);
            storeActivePage(pages.value.reference);
            next();
          },
        },
        {
          path: "projects",
          component: Projects,
          name: "projects",
          beforeEnter: (_to, _from, next) => {
            const pages = computed(() => store.getters.getPages);
            storeActivePage(pages.value.projects);
            next();
          },
        },
        {
          path: "/projects/:id",
          component: Project,
          name: "project",
          props: function (to) {
            const id = to.params.id;
            const pages = computed(() => store.getters.getPages);

            // to.meta.params = {
            //   page: pages.projects.pages[id],
            // };

            return to.meta.params;
          },
          beforeEnter: (to, _from) => {
            const id = to.params.id;
            const pages = computed(() => store.getters.getPages);

            // if (pages.value.projects.pages[id]) {
            //   storeActivePage(pages.value.projects.pages[id]);
            //   next();
            // } else {
            //   next("/not-found");
            // }
          },
        },
        {
          path: "/github/:id",
          component: Repo,
          name: "repo",
          props: function (to) {
            const id = to.params.id;
            const pages = computed(() => store.getters.getPages);

            // to.meta.params = {
            //   page: pages.value.github.pages[id],
            // };

            return to.meta.params;
          },
          beforeEnter: (to, _from) => {
            const id = to.params.id;
            const pages = computed(() => store.getters.getPages);

            // if (pages.value.github.pages[id]) {
            //   storeActivePage(pages.value.github.pages[id]);
            //   next();
            // } else {
            //   next("/not-found");
            // }
          },
        },
        {
          path: "certificates",
          component: Certificates,
          name: "certificates",
          beforeEnter: (_to, _from, next) => {
            const pages = computed(() => store.getters.getPages);
            storeActivePage(pages.value.certificates);
            next();
          },
        },
        {
          path: "honors-and-awards",
          component: Honors,
          name: "honors",
          beforeEnter: (_to, _from, next) => {
            const pages = computed(() => store.getters.getPages);
            storeActivePage(pages.value.honors);
            next();
          },
        },
        {
          path: "publications",
          component: Publications,
          name: "publications",
          beforeEnter: (_to, _from, next) => {
            const pages = computed(() => store.getters.getPages);
            storeActivePage(pages.value.publications);
            next();
          },
        },
      ],
    },
  ],
});

export default router;
