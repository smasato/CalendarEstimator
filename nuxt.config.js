export default {
  css: [],
  plugins: ["~/plugins/constants.ts"],
  build: {
    transpile: [/typed-vuex/],
    postcss: {
      syntax: "postcss-scss",
      plugins: {
        autoprefixer: require("autoprefixer"),
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
    types: ["@nuxt/types"],
  },
};
