/* eslint-env node */
const sharedPlugins = ["jsdoc", "react", "react-hooks", "prettier"];
const sharedExtends = [
  "eslint:recommended",
  "plugin:jsdoc/recommended",
  "plugin:react/recommended"
];
const sharedPrettierExtends = ["prettier", "prettier/react"];
const sharedRules = {
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",
  "jsdoc/no-types": "error",
  "jsdoc/require-param": "off",
  "jsdoc/require-param-type": "off",
  "jsdoc/require-returns": "off",
  "jsdoc/require-returns-type": "off"
};

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [...sharedPlugins],
  extends: [...sharedExtends, ...sharedPrettierExtends],
  rules: { ...sharedRules },
  settings: {
    react: {
      version: "detect"
    }
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: [...sharedPlugins, "@typescript-eslint"],
      extends: [
        ...sharedExtends,
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        ...sharedPrettierExtends,
        "prettier/@typescript-eslint"
      ],
      rules: { ...sharedRules }
    }
  ]
};
