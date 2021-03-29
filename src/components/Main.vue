
<template>
  <v-div class="container">
    <v-card> 
      <v-tabs 
      v-model="tab"
      background-color="deep-purple accent-4"
      center-active
      dark
      >
        <v-tab>Introduce</v-tab>
        <v-tab>Gallery</v-tab>
        <v-tab-item>
          <div class="introduce">안녕하세요! 한채빈입니다:)</div>
        </v-tab-item>
        <v-tab-item @click="showSnackbar">
          <Gallery/>
          <Snackbar/>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-div>
</template>

<script>

import Gallery from './Gallery.vue';
import Snackbar from './Snackbar';

export default {
  name: 'App',

  components: { 
    Snackbar,
    Gallery
  },
  methods: {
    showSnackbar() {
      this.$store.state.snackbar = true
    }
  },
  tab: null,
  data: () => ({
  }),
};
</script>

<style scoped>
.container{
    display: flex;
    justify-content:center;
    margin-top:200px;
    margin-left: auto;

}
.introduce{
    display: flex;
    justify-content:center;
    align-items:center;
    height: 600px;
    width: 800px;
}
h3 {
    margin: 40px 0 0;
}
</style>