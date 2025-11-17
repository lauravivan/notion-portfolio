import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ["../**/*.ts", "../**/*.vue"],
      exclude: ["node_modules", "dist"],
      tsconfigPath: path.resolve(__dirname, "./tsconfig.app.json"),
      insertTypesEntry: true,
    }),
  ],

  resolve: {
    alias: [
      {
        find: "@core",
        replacement: path.resolve(__dirname, "core")
      }
    ]
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

  build: {
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "notion-portfolio",
      fileName: (format) => `index.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        globals: {
          vue: "Vue",
          "vue-router": "VueRouter",
        },
      },
    },
  },
});
