<template>
  <div>
    This is a template component with a <code>msg</code> property and i18n :<br />
    {{ msg }}<br />
    {{ $t("message") }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getSupportedLocales } from "@/locales/helper";
import { getBrowserLocale } from "@/locales/helper";

export default defineComponent({
  name: "TemplateComponent",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  setup() {},
  computed: {},
  methods: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
