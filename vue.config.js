module.exports = {
  transpileDependencies: ["vuetify"],

  pages: {
    popup: {
      template: "public/browser-extension.html",
      entry: "./src/popup/main.js",
      title: "Popup"
    },
    override: {
      template: "public/browser-extension.html",
      entry: "./src/override/main.js",
      title: "Override"
    }
  },

  pluginOptions: {
    browserExtension: {
      componentOptions: {}
    }
  }
};
