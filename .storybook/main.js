const path = require("path");

// Telling compiler where to look for stories & where to apply addons
module.exports = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
};

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};

// From Storybook Preset page, should set up babel, webpack and addons as one preset
// module.exports = {
//   addons: ["@storybook/preset-typescript"],
// };

// From Storybook Preset page, should set up babel, webpack and addons as one preset but with option added
// https://github.com/storybookjs/presets/tree/master/packages/preset-typescript
module.exports = {
  addons: [
    {
      name: "@storybook/preset-typescript",
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, "./tsconfig.json"),
        },
        include: [path.resolve(__dirname, "../src")],
        transpileManager: true,
      },
    },
  ],
};

// module.exports = {
//   webpackFinal: (config) => console.dir(config, { depth: null }) || config,
// };

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  webpackFinal: async (config) => {
    config.module.rules.unshift({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
        },
      ],
      include: [path.resolve(__dirname, "../src")],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
