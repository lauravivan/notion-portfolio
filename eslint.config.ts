import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import prettier from "eslint-config-prettier";

export default [
  // Global ignores (must be first)
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "coverage/**",
      "*.config.ts",
      ".husky/**",
      ".github/**",
      ".vscode/**",
      ".prettierrc",
      ".prettierignore",
      ".gitignore",
      ".releaserc.json",
      "template",
      "src",
      "**/*.css",
      "*.json",
    ],
  },

  // JavaScript/TypeScript files
  {
    files: ["**/*.{js,ts,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Apply recommended configs
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],

  // Vue files specific config
  {
    files: ["**/*.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-empty-object-type": [
        "error",
        {
          allowObjectTypes: "always",
        },
      ],
    },
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },

  prettier,
];
