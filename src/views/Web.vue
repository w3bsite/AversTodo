<template>
  <div>
    <v-btn>hey</v-btn>
    <h2>{{ title }}</h2>
  </div>
</template>
<script>
export default {
  components: {},
  name: "key",
  data() {
    return {
      title: this.$route.path,
    };
  },
};
</script>
