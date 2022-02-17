<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> MEVN Full Stack Blog Site </v-list-item-title>
          <v-list-item-subtitle> By Hassan Shebbani </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider> </v-divider>
      <v-list flat>
        <v-subheader>ACTIONS</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.link">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    selectedItem: 1,
    items: [
      { title: "Home", icon: "mdi-home", link: "/" },
      { title: "Add Post", icon: "mdi-note-plus", link: "/add-post" },
      { title: "About", icon: "mdi-help-box", link: "/about" },
    ],
  }),
};
</script>
