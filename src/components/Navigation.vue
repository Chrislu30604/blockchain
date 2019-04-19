<template>
  <div id="navigation">
    <v-navigation-drawer clipped fixed v-model="drawer" app>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left color="transparent" flat>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer class="hidden-md-and-down"></v-spacer>
      <v-btn v-on:click="routeToHome" flat class="hidden-md-and-down white--text button">HOME</v-btn>
      <v-btn flat class="hidden-md-and-down white--text button">ABOUT</v-btn>
      <v-btn v-on:click="routeToDonate" flat class="hidden-md-and-down white--text button">DONATE</v-btn>
      <v-btn v-on:click="routeToLaunch" flat class="hidden-md-and-down white--text button">LAUNCH</v-btn>
      <v-btn flat class="hidden-md-and-down white--text button">FLOW</v-btn>
      <v-btn flat class="hidden-md-and-down white--text button">LOGIN</v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
    data () {
        return {
            drawer: false,
        }
    },
    methods: {
      routeToHome() {
        this.$router.push("/");
      },
      routeToDonate() {
        this.$router.push("/donate");
      },
      routeToLaunch() {
        this.$router.push("/launch");
      },
    },

}
</script>

<style lang="scss">

</style>
