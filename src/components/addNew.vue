<template>
  <div>
    <v-container fluid>
      <v-sheet elevation="2" outlined>
        <h1>{{ task.regNum }}</h1>
        <v-row align="center">
          <v-col class="pa-5">
            <v-form @submit.prevent="push" v-model="valid">
              <v-text-field
                style="max-width: 30%"
                outlined
                label="Title"
                class="col-md-3"
                v-model="task.title"
                :rules="rules"
                required
              ></v-text-field>
              <v-textarea
                label="content"
                v-model="task.content"
                :rules="rules"
                required
              ></v-textarea>

              <v-btn
                :disabled="valid ? false : true"
                class="float-right"
                type="submit"
                icon
                large
              >
                <v-icon>mdi-send</v-icon>
              </v-btn>
              <v-btn @click="image" icon
                ><v-icon large> mdi-attachment</v-icon>
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-sheet>

      <all-notes
        v-if="this.tasks !== null"
        :tasks="dbtasks"
        :tasksnum="task.regNum"
        :favnum="task.favNum"
        :delnum="task.delNum"
      ></all-notes>
    </v-container>
  </div>
</template>

<script>
import allNotes from "./allNotes.vue";
export default {
  components: { allNotes },
  data() {
    return {
      allu: [],
      res: null,
      task: {
        fav: false,
        del: false,
        edit: false,
        regNum: null,
        favNum: null,
        delNum: null,
      },
      valid: false,
      dbtasks: {},
      tasks: [],
      user: {},
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 5) || "Min 5 characters",
      ],
    };
  },

  methods: {
    push: async function () {
      this.task.regNum = this.task.regNum + 1;
      await this.$set(
        this.tasks,
        this.tasks.length,
        JSON.parse(JSON.stringify(this.task))
      );
      this.valid = false;
      this.sendTask();
    },
    sendTask: function () {
      this.$user("/" + this.user.mail + ".json", {
        method: "put",
        data: this.tasks,
      })
        .then((r) => {
          this.res = r.status;
          this.valid = true;
          this.dbtasks = this.tasks;
        })

        .catch((e) => (this.res = e.status));
    },
    getTasks: function () {
      this.$user
        .get("/" + this.user.mail + ".json")
        .then((r) => {
          console.log(r.data);
          this.dbtasks = r.data;
          if (typeof this.dbtasks == Array) {
            this.tasks = this.dbtasks;
            this.task.regNum = 0;
          } else {
            for (const key in this.dbtasks) {
              const element = this.dbtasks[key];
              this.task.regNum = element.regNum;
              this.$set(
                this.tasks,
                this.tasks.length,
                JSON.parse(JSON.stringify(element))
              );
            }
          }
        })

        .catch((e) => (this.allu = e));
    },
    image: function () {
      window.cloudinary
        .openUploadWidget(
          { cloud_name: "fitgame", upload_preset: "fitgame" },
          (error, result) => {
            if (!error && result && result.event === "success") {
              this.task.url = result.info.url;
              console.log(result.info.url);
            }
          }
        )
        .open();
    },
  },
  created() {
    this.user.mail = this.$cookies.mail;
    this.getTasks();
  },
};
</script>

<style></style>
