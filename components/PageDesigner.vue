<template>
  <div id="designer">
    <b-container fluid>
      <b-row>
        <b-col>
          <NavBar />
        </b-col>
      </b-row>
      <b-row align-v="stretch">
        <b-col cols="4">
          <RenderingPane />
        </b-col>
        <b-col cols="4">
          <LayoutPane />
        </b-col>
        <b-col cols="4">
          <OptionsPane />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4"></b-col>
        <b-col cols="4">
          <ItemPane />
        </b-col>
        <b-col cols="4"></b-col>
      </b-row>
    </b-container>
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
#designer {
  height: 100%;
}
</style>
