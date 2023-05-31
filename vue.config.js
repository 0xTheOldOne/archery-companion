module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/archery-companion/" : "/",

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },

  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Archery Companion";
      return args;
    });
  },
};
