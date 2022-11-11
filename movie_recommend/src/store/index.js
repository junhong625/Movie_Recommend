import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    genres: {},
    recommendMovieByWeather: {
      '천둥, 번개치는 날': ['공포', '미스터리'],
      '비 내리는 날': ['가족', '음악'],
      '눈 내리는 날': ['액션', '범죄'],
      '안개 또는 먼지 낀 날': ['모험', '판타지'],
      '맑은 날': ['애니메이션', '코미디']
    },
    movies: []
  },
  getters: {
  },
  mutations: {
    SAVE_MOVIES(state, movies) {
      state.movies = movies
    },
    SAVE_GENRES(state, genres) {
      state.genres = genres
    }
  },
  actions: {
  },
  modules: {
  }
})
