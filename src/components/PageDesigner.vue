<template>
  <div class="pagedesigner">
    <NavBar />
    <RenderingPane />
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import RenderingPane from "./RenderingPane.vue";

export default {
  name: "PageDesigner",
  props: {
    msg: String,
  },
  components: {
    NavBar,
    RenderingPane,
  },
};
</script>

<style scoped>
.pagedesigner {
}
</style>
