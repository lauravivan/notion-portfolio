import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
      components: "/src/shared/components",
      hooks: "/src/shared/hooks",
      store: "/src/shared/store/store.js",
      UIElements: "/src/shared/UIElements",
      util: "/src/shared/util",
      global: "/src/shared/global/globalProperties.js",
    },
  },
});
