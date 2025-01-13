module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["node_modules/(?!(your-module-name)/)"],
};
