import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}", "!src/**/*.d.ts"],
  rootDir: "./",
  moduleNameMapper: {
    //Map the aliases from tsconfig.app.json
    "@root/(.*)": "<rootDir>/src/$1",
    "@assets/(.*)": "<rootDir>/src/assets/$1",
    "@components/(.*)": "<rootDir>/src/components/$1",
    "@mappers/(.*)": "<rootDir>/src/mappers/$1",
    "@domain/(.*)": "<rootDir>/src/domain/$1",
    "@pages/(.*)": "<rootDir>/src/pages/$1",
    "@services/(.*)": "<rootDir>/src/services/$1",
  },
};

export default config;
