<template>
  <b-container fluid id="item" class="flexmidrow shadow-lg rounded">
    <b-row>
      <b-col>
        <p id="title">Items</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        class="item border border-secondary"
        draggable
        v-for="time in times"
        :key="time"
        cols="1"
      >
        <Item />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "ItemPane",
  data: function () {
    return {
      times: 12,
    };
  },
};
</script>

<style scoped>
#item {
  background-color: yellow;
}
#title {
  text-align: center;
}
.item {
  margin: 0.1rem;
}
</style>
