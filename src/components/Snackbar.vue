
<template>
  <v-snackbar
  class="snackbar"
  :timeout="$store.state.timeout"
  v-model="$store.state.snackbar" 
  absolute
  bottom
  color="deep-purple accent-4"
  elevation="24"
  >
    바탕화면이 아닌 이미지를 누르세요!
  </v-snackbar>
</template>

<script>
export default {
  name: 'App',

  components: { 
  },
  methods: {
  },
  data: () => ({
  }),
};
</script>

<style scoped>
.snackbar {
  margin-bottom: 40px;
}
</style>