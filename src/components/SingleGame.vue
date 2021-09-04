<template>
  <v-expand-x-transition>
    <div v-if="game" style="direction: rtl">
      <div>
        <v-img eager :src="`/img/1/1big/` + game.title + `.jpg`">
          <div class="fill-height repeating-gradient"></div>
        </v-img>

        <singledata :game="game" />
        <Relatedalert :title="game.title"></Relatedalert>
        <relatedslide
          style="direction: ltr"
          :Genre="this.game.caption"
          :id="this.game.id"
        ></relatedslide>
      </div>
    </div>
  </v-expand-x-transition>
</template>

<script>
import Relatedalert from "./SingleGame/relatedalert.vue";
import relatedslide from "./SingleGame/relatedslide.vue";
import singledata from "./SingleGame/singledata.vue";
export default {
  components: { singledata, relatedslide, Relatedalert },
  props: { single: { type: Object } },
  name: "single",
  data() {
    return {};
  },
  computed: {
    game() {
      if (!this.single) {
        return this.apig.data;
      } else {
        return this.single;
      }
    }
  },
  mounted() {
    if (!this.game) {
      this.singlegame = this.apig.data;
    } else {
      console.log(this.apig.data);
    }
  },
  chimera() {
    return {
      apig: this.$url + "/" + this.$route.params.id
    };
  }
};
</script>

<style></style>
