<template>
  <v-bottom-nav :active.sync="bottomNav" :value="bottomNavVal" dark fixed class="mb-4">
    <v-btn color="teal" flat value="regions" draggable>
      <span>Potato</span>
      <v-icon>picture_in_picture</v-icon>
    </v-btn>

    <v-btn color="teal" flat value="items" draggable>
      <span>Tomato</span>
      <v-icon>list</v-icon>
    </v-btn>

    <v-btn color="teal" flat value="buttons" draggable>
      <span>Salad</span>
      <v-icon>radio_button_checked</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
// import Drag from "./Drag";
export default {
  components: {
    // Drag
  },
  name: "Regions",
  data: () => ({ bottomNavVal: true, bottomNav: null }),
  props: {}
};
</script>