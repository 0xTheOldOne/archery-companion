<template>
  <div>
    <HelloWorld msg="toto" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getSupportedLocales } from "@/locales/helper";
import { getBrowserLocale } from "@/locales/helper";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
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
