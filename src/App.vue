<template>
  <div id="app">
    <PageDesigner />
  </div>
</template>

<script>
import PageDesigner from "./components/PageDesigner.vue";

export default {
  name: "App",
  components: {
    PageDesigner,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1a222b;
}
</style>
