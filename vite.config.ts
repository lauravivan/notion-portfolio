import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@core",
        replacement: path.resolve(__dirname, "core"),
      },
    ],
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@core/assets/scss/_base.scss" as *;
          @use "@core/assets/scss/_var.scss" as *;
          @use "@core/assets/scss/_mixin.scss" as *;
        `,
      },
    },
  },
});
