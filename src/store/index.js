import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        images: [
            'https://placekitten.com/801/800',
            'https://placekitten.com/802/800',
            'https://placekitten.com/803/800',
            'https://placekitten.com/807/800',
            'https://placekitten.com/805/800',
            'https://placekitten.com/806/800'
          ],
        index: 9,
        snackbar:false,
        timeout:3000
    },
    mutations: {
    },
    actions: { 
    },
    getters: { 
    }
})