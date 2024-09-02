import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: false,
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ["ion-icon"].includes(tag),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
      components: "/src/components",
      hooks: "/src/hooks",
      pages: "/src/pages",
      store: "/src/store.js",
      router: "/src/router.js",
      global: "/src/globalProperties.js",
      util: "/src/util"
    },
  },
});
