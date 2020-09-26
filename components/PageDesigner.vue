<template>
  <div class="pagedesigner">
    <NavBar />
    <RenderingPane />
  </div>
</template>

<script>
export default {
  name: "PageDesigner",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.pagedesigner {
}
</style>
