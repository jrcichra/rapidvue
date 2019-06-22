<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawerRight" fixed right clipped app dark>
      <v-list dense>
        <v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
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
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Page 2: Customers</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="left" temporary fixed dark></v-navigation-drawer>
    <v-content>
      <v-container fluid fill-height dark>
        <v-layout justify-center align-center>
          <v-flex shrink></v-flex>
          <h1>Page Content goes here</h1>
        </v-layout>
      </v-container>
    </v-content>

    <v-navigation-drawer v-model="right" right temporary fixed dark></v-navigation-drawer>
    <!-- Bottom Nav -->
    <v-bottom-nav :active.sync="bottomNav" :value="bottomNav" dark fixed class="mb-4">
      <v-btn color="teal" flat value="recent" draggable>
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn color="teal" flat value="favorites" draggable>
        <span>Sync</span>
        <v-icon>sync</v-icon>
      </v-btn>

      <v-btn color="teal" flat value="nearby" draggable>
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
    <!-- End Bottom Nav -->
    <v-footer color="green" class="white--text" app fixed>
      <span>RapidVue</span>
      <v-spacer></v-spacer>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawerLeft: null,
    drawerRight: null,
    right: false,
    left: false,
    bottomNav: true
  }),
  props: {
    source: String
  }
};
</script>