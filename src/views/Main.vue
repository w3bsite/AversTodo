<template>
  <div>
    <v-container fluid>
      <h3>Add a note</h3>

      <add-new></add-new>
    </v-container>
  </div>
</template>

<script>
import AddNew from "../components/addNew.vue";

export default {
  components: { AddNew },
  name: "Main",
  data() {
    return {
      user: {
        name: "mamad",
        user: { mail: "", tasks: {} },
        tasks: { title: "firs" },
      },
      allu: [],
      res: null,
    };
  },
  computed: {
    mail: {
      get: function () {
        return this.$cookies.mail || null;
      },
    },
  },
  created() {
    this.user.mail = this.mail;
  },
};
</script>

<style></style>
