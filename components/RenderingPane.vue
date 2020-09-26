<template>
  <div class="pane">
    <ul class="fa-ul">
      <li v-for="element in elements" :key="element" @click="print(element)">
        <span class="fa-li">
          <font-awesome-icon :icon="['far', 'folder']" />
        </span>
        {{ element }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RenderingPane",
  data: function () {
    return {
      elements: ["one", "two", "three", "four", "five"],
    };
  },
  methods: {
    print: function (thing) {
      console.log(thing);
    },
  },
};
</script>

<style scoped>
.pane {
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 5px;
  width: 25%;
  transition-duration: 1s;
  transition-delay: 0s;
}
.pane:hover {
  background-color: aqua;
}
ul {
}
</style>
