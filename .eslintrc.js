"use strict";

module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    // todo: enable these
    //"no-var": "error",
    //"prefer-const": "error",
    strict: "error",
  },
  overrides: [
    {
      files: ["lib/client/*.mjs"],
      parserOptions: {
        sourceType: "module",
      },
      env: {
        node: false,
        browser: true,
      },
    },
    {
      files: ["test/client/*.mjs"],
      parserOptions: {
        sourceType: "module",
      },
    },
  ],
};
