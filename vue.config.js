const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@use "@/assets/sass/_variables.scss" as variables; @use "@/assets/sass/_mixins.scss" as mixins;`,
      },
    },
  },
});
