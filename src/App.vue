<template>
  <v-app>
    <AppBar>
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
    </AppBar>
  </v-app>
</template>

<script>
import AppBar from "@/components/Globals/AppBar.vue";
export default {
  name: "App",

  components: { AppBar },

  data: () => ({}),
};
</script>
