/* eslint-env node */
module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  restoreMocks: true,
  timers: "fake",
  moduleNameMapper: {
    "^.+\\.scss$": "identity-obj-proxy"
  },
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.json"
    }
  }
};
