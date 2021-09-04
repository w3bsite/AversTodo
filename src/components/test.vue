<template>
  <v-container field>
    <v-row class="">
      <v-card class="mx-auto pa-5">
        <span v-if="e">{{ e }}</span>
        <span v-if="jwt">{{ jwt }}</span>
        <v-form @submit="signup()">
          <v-col>
            <v-text-field
              v-model="username"
              :rules="Rules"
              label="username"
              append-icon="mdi-face"
              required
            ></v-text-field>
            {{ username }}
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              append-icon="mdi-at"
              required
            ></v-text-field>
            {{ password }}
            <v-text-field
              v-model="password"
              label="Password"
              :rules="Rules"
              hide-details="auto"
              append-icon="mdi-lock"
              required
            >
              {{ email }}
            </v-text-field>
          </v-col>
          <v-card-actions dir="rtl">
            <v-btn type="submit">Submit</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {},
  methods: {
    signup: function() {
      this.$axios({
        method: "post",
        url: this.$urlroot + `/auth/local/register`,
        data: {
          username: this.username,
          password: this.password,
          email: this.email
        }
      })
        .then(r => (this.jwt = r.data.jwt))
        .catch(e => (this.e = e));
    }
  },

  computed: {},
  watch: {},
  data() {
    return {
      e: null,
      jwt: null,
      valid: false,
      username: "",
      email: "",
      password: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+./.test(v) || "E-mail must be valid"
      ],
      Rules: [
        v => !!v || "Password is required",
        value =>
          (value && value.length >= 3) ||
          "Password must be at least 6 characters"
      ]
    };
  }
};
</script>

<style></style>
