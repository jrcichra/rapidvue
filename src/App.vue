<template>
  <v-app>
    <v-content>
      <PageDesigner/>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import PageDesigner from "./components/PageDesigner";

export default {
  name: "App",
  components: {
    PageDesigner
  },
  data() {
    return {
      //
    };
  }
};
</script>
