<template>
  <div id="designer" class="fullheight">
    <b-container class="fullheight" fluid>
      <b-row>
        <b-col>
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

<style scoped>
#designer {
}
.fullheight {
  height: 53rem;
}
.mostheight {
  height: 40rem;
}
.middleheight {
  height: 13rem;
}
</style>
