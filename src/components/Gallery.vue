
<template>
  <v-div id="gallery">
    <v-row>
      <v-col
      v-for="(image, i) in $store.state.images"
      :key="i"
      class="d-flex child-flex"
      cols="4"
      >
        <v-img class="image" :src="image" @click="$store.state.index = i"/>
      </v-col>
    </v-row>
    <vue-gallery-slideshow :images="$store.state.images" :index="$store.state.index" @close="$store.state.index = null"></vue-gallery-slideshow>
  </v-div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';

export default {
  name: 'App',

  components: { 
    VueGallerySlideshow
  },
  methods: {
  },
  data: () => ({
  }),
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.row {
  width: 800px;
  height: 600px;
  padding:50px;
}
.image {
  width: 100px;
  height: 150px;
  margin: 10px;
  cursor: pointer;
}
</style>