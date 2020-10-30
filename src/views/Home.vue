<template>
  <v-app id="inspire">
    <v-img class="background" src="../assets/background.jpg"></v-img>
    <v-navigation-drawer
      class="drawer"
      width="400px"
      v-model="drawer"
      src="../assets/background.jpg"
      temporary
      absolute
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar dense app color="rgba(0,0,0,0)" elevation="0">
      <v-app-bar-nav-icon 
        @click="drawer = !drawer"
        color="text"
      ></v-app-bar-nav-icon>
      <v-slide-group dark multiple show-arrows class="quicklinks">
        <v-slide-item
          v-for="n in 25"
          :key="n"
        >
        <v-menu offset-y dark auto>
          <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="text"
                text
                tile
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-link</v-icon>
                Press me
              </v-btn>
          </template>
          <v-list color="rgba(0,0,0,0)" outlined tile dense>
            <v-list-item
              class="d-flex justify-center "
              v-for="n in 3"
              :key="n"
            >
            <v-btn class="dropdownmenu" color="text" tile text><v-icon>mdi-link</v-icon>Press me</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
        </v-slide-item>
      </v-slide-group>
    </v-app-bar>

    <v-main>
      <v-container class="grid-container">
        <v-col cols ="12" sm="12">
          <v-row justify="center" class="ma-15">
            <clock></clock>
          </v-row>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import clock from "../components/clock"
export default {
  name: "App",
  components: {
    clock,
  },
  data: () => ({
    drawer: false
  })
};
</script>

<style lang="sass" scoped>
.dropdownmenu
  padding: 0px
.background
  width: 100vw
  height: 100vh
  position: absolute
.drawer
  background: "../assets/background.jpg"
.grid-container
  width: 100%
  height: 100%
  max-width: 100%
.quicklinks
  width: 99%
</style>
