<template>
  <div class="pane shadow-lg rounded">Rendering</div>
</template>

<script>
export default {
  name: "RenderingPane",
  data: function () {
    return {
      elements: {
        "Page 1": [
          {
            Regions: [
              {
                "Page Navigation": undefined,
              },
            ],
            "Breadcrumb Bar": [
              {
                "Sample Database Application": "this is an object",
              },
            ],
          },
        ],
      },
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
  background-color: aqua;
  text-align: center;
  height: 100%;
}
</style>
