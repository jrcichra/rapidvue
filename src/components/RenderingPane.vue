<template>
  <div class="pane">
    <ul class="fa-ul">
      <li v-for="element in elements" :key="element">
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
};
</script>

<style scoped>
.pane {
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 5px;
  width: 25%;
}
ul {
}
</style>
