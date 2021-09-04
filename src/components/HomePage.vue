<template>
  <div>
    <v-container fluid> </v-container>

    <v-container fluid>
      <v-sheet outlined>
        <login></login>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import Login from "./Login.vue";

export default {
  components: { Login },

  data() {
    return {
      user: {
        name: "mamad",
        mail: "somthing@somthing.com",
        tasks: { title: "firs" },
      },
      allu: [],
      res: null,
    };
  },
  methods: {
    getTask: function () {
      this.$user({
        method: "get",
      })
        .then((r) => {
          const resp = r.data;
          for (const key in resp) {
            if (Object.hasOwnProperty.call(resp, key)) {
              const element = resp[key];
              this.allu = [...this.allu, element];
            }
          }
        })
        .catch((e) => (this.allu = e));
    },
  },
  created() {},
};
</script>

<style></style>
