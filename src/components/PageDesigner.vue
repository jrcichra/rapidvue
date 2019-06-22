<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawerRight" fixed right clipped app dark>
      <v-list dense>
        <v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon>open_with</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Properties</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="green" dark fixed app clipped-right clipped-left>
      <v-toolbar-side-icon @click.stop="drawerLeft = !drawerLeft"></v-toolbar-side-icon>
      <v-toolbar-title>RapidVue Page Designer</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer v-model="drawerLeft" fixed left clipped app dark>
      <v-list dense>
        <v-list-tile @click.stop="left = !left">
          <v-list-tile-action>
            <v-icon>pageview</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Page 2: Customers</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click.stop="left = !left">
          <v-list-tile-action>
            <v-icon>picture_in_picture</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Component</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="left" temporary fixed dark></v-navigation-drawer>
    <v-content>
      <v-container fluid fill-height dark>
        <v-layout justify-center align-center>
          <v-flex shrink></v-flex>
          <h1>Page Content goes here and goes on and on and on and on and on and on and on and on and on and on</h1>
          <!-- <Drag></Drag> -->
        </v-layout>
      </v-container>
    </v-content>

    <v-navigation-drawer v-model="right" right temporary fixed dark></v-navigation-drawer>
    <!-- Main Bottom Nav -->
    <Types v-if="bottomMode == 'types'" @changeBottomMode="changeBottomMode"></Types>
    <Regions v-if="bottomMode == 'regions'"></Regions>
    <!-- End Bottom Nav -->
    <v-footer color="green" class="white--text" app fixed>
      <span>RapidVue</span>
      <v-spacer></v-spacer>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Types from "./Types";
import Regions from "./Regions";
export default {
  components: {
    Types,
    Regions
  },
  methods: {
    changeBottomMode(mode) {
      this.bottomMode = mode;
      console.log(mode);
    }
  },
  data: () => ({
    drawerLeft: null,
    drawerRight: null,
    right: false,
    left: false,
    bottomMode: "types"
  }),
  name: "PageDesigner",
  props: {
    source: String
  }
};
</script>