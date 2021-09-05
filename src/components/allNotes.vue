<template>
  <div v-if="tasks">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-btn-toggle class="d-flex flex-column flex-md-row my-5" group>
            <v-btn
              depressed
              :height="mobile ? '20px' : '40px'"
              class="col-12 col-md-3 my-0"
              v-model="all"
            >
              <v-col align="center" class="text--secondary">
                <v-icon large> mdi-format-align-left </v-icon>

                {{ tasksnum }}

                Notes
              </v-col>
            </v-btn>

            <v-btn
              depressed
              :height="mobile ? '20px' : '40px'"
              class="col-12 col-md-3 my-0"
              v-model="favsOnly"
            >
              <v-col align="center" class="text--secondary">
                <v-icon large>mdi-heart</v-icon>

                {{ favNum }}

                Favorite Notes
              </v-col>
            </v-btn>

            <v-btn
              depressed
              :height="mobile ? '20px' : '40px'"
              class="col-12 col-md-3 my-0"
              v-model="delsOnly"
            >
              <v-col align="center" class="text--secondary">
                <v-icon large>mdi-delete</v-icon>

                {{ delNum }}

                Deleted Notes
              </v-col>
            </v-btn>
          </v-btn-toggle>
        </v-col>
        <v-col cols="12">
          <v-row align="center">
            <v-col v-for="(task, i) in filteredTasks" :key="i" cols="12" md="3">
              <v-card height="300px" class="pa-2">
                <v-container height="280px">
                  <v-row>
                    <v-col cols="10">
                      <h3>
                        {{
                          task.title.length > "30"
                            ? task.title.substring(0, 30) + ".."
                            : task.title
                        }}
                      </h3>
                      <br />

                      <v-textarea
                        v-if="task.edit == true"
                        v-model="task.content"
                      >
                      </v-textarea>
                      <p v-if="task.edit == false">
                        {{
                          task.content.length > "90"
                            ? task.content.substring(0, 90) + ".."
                            : task.content
                        }}
                      </p>
                      <span v-if="task.url">
                        <a :href="task.url" target="_blank">
                          <v-btn icon>
                            <v-icon color="red"> mdi-file</v-icon></v-btn
                          ></a
                        >
                      </span>
                    </v-col>
                    <v-col cols="1">
                      <v-btn
                        v-if="task.del == false"
                        @click="
                          addToFav(i);
                          task.fav = !task.fav;
                          task.fav == true ? (favNum += 1) : (favNum -= 1);
                        "
                        icon
                        :color="task.fav == true ? 'pink' : ''"
                      >
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>
                      <v-btn
                        @click="
                          addToFav(i);
                          task.edit = !task.edit;
                        "
                        icon
                      >
                        <v-icon>mdi-pen</v-icon>
                      </v-btn>
                      <div style="height: 140px"></div>
                      <v-btn
                        v-if="task.del == false"
                        @click="
                          addToFav(i);
                          task.del = !task.del;
                          task.fav = false;
                          delNum += 1;
                          tasksnum -= 1;
                          task.fav == true ? (favNum -= 1) : (favNum = favNum);
                        "
                        icon
                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: { tasks: {}, tasksnum: {}, favnum: {}, delnum: {} },
  data() {
    return {
      mail: "",
      delNum: 0,
      favNum: 0,
      all: true,
      favsOnly: false,
      delsOnly: false,
      res: null,
    };
  },
  methods: {
    addToFav: function (i) {
      this.tasks[i].fav != this.tasks[i].fav;
      this.tasks[i].favNum += 1;
      this.$user("/" + this.$cookies.mail + ".json", {
        method: "put",
        data: this.tasks,
      }).then((r) => {
        console.log(r);
      });
    },
    delTask: function (i) {
      this.tasks[i].del != this.tasks[i].del;

      this.$user("/" + this.$cookies.mail + ".json", {
        method: "put",
        data: this.tasks,
      }).then((r) => {
        console.log(r);
      });
    },
  },
  computed: {
    filteredTasks: function () {
      if (this.favsOnly == true) {
        return this.tasks.filter((e) => e.fav == this.favsOnly);
      } else if (this.delsOnly == true) {
        return this.tasks.filter((e) => e.del == this.delsOnly);
      } else if (this.all == true) {
        const x = this.tasks.filter((e) => e.del == false);

        return x;
      } else {
        return this.tasks.filter((e) => e.del == false);
      }
    },
    mobile: function () {
      return this.$vuetify.breakpoint.mobile ? true : false;
    },
  },
};
</script>

<style lang="scss">
/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: dark;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 2px;
}

*::-webkit-scrollbar-track {
  background: white;
}

*::-webkit-scrollbar-thumb {
  background-color: grey;
  border-radius: 20px;
  border: 1px grey;
}
</style>
