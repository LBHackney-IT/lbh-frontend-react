/* eslint-env node */
module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    "^.+\\.scss$": "identity-obj-proxy"
  },
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.json"
    }
  }
};
