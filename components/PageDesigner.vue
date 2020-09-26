<template>
  <div id="designer" class="fullheight">
    <b-container class="fullheight" fluid>
      <b-row>
        <b-col id="navbar">
          <NavBar />
        </b-col>
      </b-row>
      <b-row align-v="stretch" class="fullheight">
        <b-col cols="3">
          <RenderingPane />
        </b-col>
        <b-col cols="6" class="mostheight">
          <LayoutPane />
          <ItemPane class="middleheight" />
        </b-col>
        <b-col cols="3">
          <OptionsPane />
        </b-col>
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
<style >
#designer {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
<style scoped>
#navbar {
  padding-bottom: 1rem;
}
.fullheight {
  height: 95%;
}
.mostheight {
  height: 80%;
}
.middleheight {
  height: 24.2%;
}
</style>
