declare enum ENV {
  PRODUCTION = "production",
  DEVELOPMENT = "development",
  TEST = "test"
}

declare let NODE_ENV: ENV;

declare namespace NodeJS {
  interface Process {
    env: ProcessEnv;
  }
  interface ProcessEnv {
    [key: string]: string | undefined;
    NODE_ENV: ENV;
  }
}
