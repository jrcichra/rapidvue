<template>
  <ul class="fa-ul">
    <li
      v-for="(v, k) in elements"
      :key="k"
      @click.stop="internal_collapsed = !internal_collapsed"
    >
      <Directory :elements="v" :level="level + 1" />
      <!-- <span v-if="!isLeaf(element)">Not a leaf</span>
      <span v-if="isLeaf(element)" class="fa-li">
        <font-awesome-icon :icon="getFolderStyle(index)" />
      </span>
      <span v-if="isLeaf(element)">
        {{ element }} - {{ level }} - {{ getCollapsedText(index) }}
      </span> -->
    </li>
  </ul>
</template>

<script>
export default {
  name: "Directory",
  props: {
    elements: { type: [Object, Array], default: [] },
    level: { type: Number, default: 1 },
    collapsed: { type: Boolean, default: false },
    leaf: { type: Boolean, default: false },
  },
  methods: {
    print: function (thing) {
      console.log(thing);
    },
    getCollapsedText: function (index) {
      return this.internal_collapsed ? "Collapsed" : "Not Collapsed";
    },
    getFolderStyle: function (index) {
      return this.internal_collapsed
        ? ["far", "folder"]
        : ["far", "folder-open"];
    },
    isArray: function (element) {
      return Array.isArray(element);
    },
  },
  data() {
    return {
      internal_collapsed: this.collapsed,
    };
  },
};
</script>