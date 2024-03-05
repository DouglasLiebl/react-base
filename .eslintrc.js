module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["prettier", "react", "react-hooks"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": "error",
    "no-console": "off",
    "no-unused-vars": "off",
    "class-methods-use-this": "off",
    "import/no-extraneous-dependencies": "off",
    "no-param-reassign": "off",
    "max-len": "off",
    "react/jsx-filename-extension": "off",
    "import/prefer-default-export": "off",
  },
};
