module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/main.scss";`
      }
    }
  }
};
