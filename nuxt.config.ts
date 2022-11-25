import { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  target: "static",
  router: {
    base: "/CalendarEstimator/",
  },
  head: {
    titleTemplate: "CalendarEstimator - %s",
  },
  css: [],
  plugins: ["~/plugins/constants.ts", "~/plugins/calc.ts"],
  build: {
    transpile: [/typed-vuex/],
    postcss: {
      plugins: {
        autoprefixer: {},
      },
    },
  },
  components: true,
  buildModules: [
    "@nuxtjs/stylelint-module",
    "@nuxt/typescript-build",
    "nuxt-typed-vuex",
    "@nuxtjs/vuetify",
    "@nuxtjs/style-resources",
    "@nuxt/postcss8",
  ],
  styleResources: {
    sass: [],
  },
  compilerOptions: {
    types: ["@nuxt/types", "@stdlib/types", "@types/plotly.js"],
  },
};

export default config;