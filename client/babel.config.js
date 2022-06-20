module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  loaders: [
    { query: {compact: false} }
  ],
  env: {
    test: {
      plugins: ["transform-require-context"],
    },
  },
}
