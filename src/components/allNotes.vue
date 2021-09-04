<template>
  <div>
    <v-container class="card" fluid>
      allnotes:{{ tasksnum }}
      <v-row align="center">
        <v-col v-for="(u, i) in alltasks" :key="i" cols="12" md="3">
          <v-card>
            <v-card-actions>
              <!-- <v-btn fab>favorit</v-btn> -->
            </v-card-actions>
            {{ u.title }}
            <br />
            {{ u.content }}
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: { tasks: {}, tasksnum: { type: Number } },
  data() {
    return {
      mail: "",

      res: null,
    };
  },
  computed: {
    alltasks: function () {
      return this.tasks;
    },
  },
};
</script>

<style></style>
