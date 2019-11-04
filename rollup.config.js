/* eslint-env node */
const babel = require("rollup-plugin-babel");
const del = require("rollup-plugin-delete");
const { default: multiInput } = require("rollup-plugin-multi-input");
const resolve = require("rollup-plugin-node-resolve");
const postcss = require("rollup-plugin-postcss");
const progress = require("rollup-plugin-progress");
const typescript = require("rollup-plugin-typescript2");

const pkg = require("./package.json");
const tsconfig = require("./tsconfig.json");

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
];

const plugins = [
  progress({
    clearLine: false
  }),
  resolve(),
  postcss(),
  typescript({
    typescript: require("typescript"),
    tsconfigOverride: {
      exclude: [
        ...tsconfig.exclude,
        "**/__tests__/**/*",
        "**/*.spec.*",
        "**/*.test.*"
      ]
    }
  }),
  babel({
    extensions: [".ts", ".tsx"],
    exclude: "**/node_modules/**/*"
  })
];

module.exports = [
  {
    input: ["src/**/*.ts?(x)", "!**/*.(spec|test).*", "!**/__tests__/**/*"],
    output: {
      dir: "dist",
      format: "es"
    },
    external,
    plugins: [
      multiInput(),
      del({
        targets: ["dist/**/*"],
        verbose: true
      }),
      ...plugins
    ]
  },
  {
    input: "src/index.ts",
    output: {
      file: pkg.main,
      format: "cjs"
    },
    external,
    plugins
  }
];
