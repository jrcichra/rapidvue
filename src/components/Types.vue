<template>
  <v-bottom-nav :active.sync="bottomNav" :value="bottomNavVal" dark fixed class="mb-4">
    <v-btn color="teal" flat value="regions" draggable @click="emitBottomMode('regions')">
      <span>Regions</span>
      <v-icon>picture_in_picture</v-icon>
    </v-btn>

    <v-btn color="teal" flat value="items" draggable>
      <span>Items</span>
      <v-icon>list</v-icon>
    </v-btn>

    <v-btn color="teal" flat value="buttons" draggable>
      <span>Buttons</span>
      <v-icon>radio_button_checked</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>    


<script>
export default {
  components: {
    // Drag
  },
  name: "Types",
  methods: {
    emitBottomMode(mode) {
      this.$emit("changeBottomMode", mode);
    }
  },
  data: () => ({ bottomNavVal: true, bottomNav: null }),
  props: {}
};
</script>