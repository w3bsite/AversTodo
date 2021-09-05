<template>
  <div>
    <v-container fluid>
      <v-sheet
        height="334"
        max-width="360"
        outlined
        class="mx-auto px-5 d-flex flex-column col-md-4"
      >
        <v-card-title align-center class="mx-auto">
          <h2>Login</h2>
        </v-card-title>

        <v-col class="mx-auto" cols="12" sm="12">
          <v-form @submit.prevent="sendTask">
            <div class="d-flex">
              <v-text-field outlined v-model="mail" label="E-mail" required>
              </v-text-field>
              <v-sheet class="mt-5"><h3>.com</h3></v-sheet>
            </div>

            <br />
            <v-sheet height="auto" class="px-5 pt-5 mt-5">
              <v-btn color="primary" class="float-right mt-5" large to="main">
                Login
              </v-btn>
              <br />

              {{ this.user.mail }}
            </v-sheet>
          </v-form>
        </v-col>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      res: null,

      user: { login: true },
    };
  },
  computed: {
    mail: {
      get: function () {
        return this.$cookies.mail || null;
      },
      set: function (value) {
        this.$setCookie("mail", value);
        // this.user.mail = value;
      },
    },
  },
  methods: {},

  created() {
    // this.user.mail = this.mail;
  },
};
</script>

<style></style>
