import { ProjectOptions } from "@vue/cli-service";

const config: ProjectOptions = {
  lintOnSave: process.env.NODE_ENV !== "test",
  css: {
    requireModuleExtension: true,
    sourceMap: true,
  },
  pwa: {
    themeColor: "#336699",
  },
};

export default config;
