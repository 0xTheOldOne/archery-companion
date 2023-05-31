<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { getSupportedLocales } from "./locales/helper";
import { getBrowserLocale } from "./locales/helper";

export default defineComponent({
  name: "App",
  data() {
    return {
      locales: getSupportedLocales(),
      browserLocale: getBrowserLocale({ countryCodeOnly: true }),
    };
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "local",
    });

    // Something todo ..

    return { t };
  },
  mounted() {
    if (this.browserLocale) {
      this.$i18n.locale = this.browserLocale;
    }
  },
});
</script>

<style lang="less">
@import "@/assets/styles/_variables.less";

html,
body {
  #app {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: @md-text-primary-color;

    nav {
      padding: 30px;

      a {
        font-weight: bold;
        color: @md-text-primary-color;

        &.router-link-exact-active {
          color: @md-text-hint-color;
        }
      }
    }
  }
}
</style>
