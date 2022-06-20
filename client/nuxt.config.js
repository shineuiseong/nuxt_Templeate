import colors from "vuetify/es5/util/colors";
import VuetifyLoaderPlugin from "vuetify-loader/lib/plugin";
export default {
  target: "server",
  mode: "universal",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt front",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "author",
        content: "StackShines",
      },
      {
        hid: "description",
        name: "description",
        content: "nuxt front",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "",
      },
      {
        property: "og:image:width",
        content: "640",
      },
      {
        property: "og:image:height",
        content: "480",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
  },
  env: {},
  css: ["@/assets/css/global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vuetify.js",
    "~/plugins/mixin.js",
    "~/plugins/vue2-perfect-scrollbar.js",
    // "~/plugins/local-storage.js",
  ],
  router: {
    middleware: [
      "auth",
      // 'guard'
    ],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "nuxt-vuex-localstorage",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "nuxt-route-meta",
    "nuxt-clipboard2",
    "@nuxtjs/universal-storage",

    ["cookie-universal-nuxt", { alias: "cookies" }],
  ],

  storage: {
    vuex: {
      namespace: "storage",
    },
    cookie: {
      prefix: "",
      options: {
        path: "/",
      },
    },
    localStorage: {
      prefix: "",
    },
    ignoreExceptions: false,
  },

  axios: {
    proxy: false,
  },
  proxy: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/scss/_variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: colors.blue.lighten1,
          accent: colors.grey.lighten3,
          secondary: colors.amber.lighten3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vuetify/lib", "vee-validate/dist/rules"],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      /*
       ** You can extend webpack config here
       */
      extend(config, ctx) {},
    },
  },
};
