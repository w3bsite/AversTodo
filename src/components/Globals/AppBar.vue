<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="!miniVariant"
      :clipped="clipped"
      fixed
      bottom
      app
    >
      <v-list nav>
        <img :src="vector" alt="profile" />
        <h3>username</h3>
        <h3>Email:</h3>
        <p>{{ mail }}</p>
        <v-switch
          v-model="$vuetify.theme.dark"
          hint="Theme"
          inset
          persistent-hint
        ></v-switch>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn v-if="drawer" icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "left" : "right"}` }}</v-icon>
      </v-btn>

      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <slot> </slot>

    <v-footer absolute app>
      <span v-focus>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      clipped: false,
      vector: require("../../assets/Vector.png"),
      drawer: false,
      fixed: true,
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: "Avers Todo",
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/",
        },
        {
          icon: "mdi-format-align-left",
          title: "Notes",
          to: "Main",
        },
      ],
    };
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
  computed: {
    mail: {
      get: function () {
        return this.$cookies.mail || null;
      },
    },
    mini() {
      if (this.$vuetify.breakpoint.mobile) {
        return true;
      } else {
        return false;
      }
    },
  },

  mounted() {
    if (this.$vuetify.breakpoint.mobile == true) {
      this.drawer = false;
      this.miniVariant = true;
    } else if (this.$route.name == "Home") {
      this.drawer = false;
      this.miniVariant = false;
    } else {
      this.drawer = true;
      this.miniVariant = true;
    }
  },
  watch: {
    "$route.name": {
      handler: function () {
        if (this.$route.name == "Home") {
          this.drawer = false;
          this.miniVariant = false;
        } else {
          this.drawer = true;
          this.miniVariant = true;
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
