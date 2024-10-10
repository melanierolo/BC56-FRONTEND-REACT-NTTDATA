import js from "eslint/js";
import globals from "globals";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import reactHooks from "@eslint-plugin-react-hooks";
import reactRefresh from "@eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "@eslint-config-prettier";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintConfigPrettier,
      ,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": tsEslintPlugin,
    },
    rules: {
      "no-console": "warn",
      "no-var": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-duplicate-enum-values": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-module-boundary-types": "warn",
      eqeqeq: "error",
      indent: ["error", 2],
      ...tsEslintPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    ignores: [
      "node_modules/**",
      "dist/**",
      "package.json",
      "package-lock.json",
    ],
  },
);
