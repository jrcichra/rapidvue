<template>
  <div id="layout" class="shadow-lg rounded">
    Layout
    <draggable
      v-model="value"
      group="items"
      @start="drag = true"
      @end="drag = false"
    >
      <div v-for="element in value" :key="element.id">{{ element.name }}</div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "LayoutPane",
  props: {
    value: { type: Array, default: [] },
  },
  components: {
    draggable,
  },
  data: function () {
    return {
      myArray: [
        {
          name: "vue.draggable",
          order: 1,
        },
        {
          name: "draggable",
          order: 2,
        },
        {
          name: "component",
          order: 3,
        },
        {
          name: "for",
          order: 4,
        },
        {
          name: "vue.js 2.0",
          order: 5,
        },
        {
          name: "based",
          order: 6,
        },
        {
          name: "on",
          order: 7,
        },
        {
          name: "Sortablejs",
          order: 8,
        },
      ],
    };
  },
};
</script>

<style scoped>
#layout {
  text-align: center;
  background-color: goldenrod;
  height: 100%;
  margin-bottom: 0.5%;
}
</style>
