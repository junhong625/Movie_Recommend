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
    movieList: [
      {
        title: '스파이더맨',
        isWatched: false,
      },
      {
        title: '스타워즈',
        isWatched: false,
      },
    ]
  },
  getters: {
  },
  mutations: {
    // SAVE_MOVIES(state, movies) {
    //   state.movies = movies
    // }
    ADD_MOVIE(state, movie) {
      state.movieList.push(movie)
    }, 
    MOVIE_COMPLETED(state, movie) {
      const idxMovie = state.movieList.indexOf(movie)
      state.movieList[idxMovie].isWatched = !state.movieList[idxMovie].isWatched
    }
  },
  actions: {
    addMovie(context, movie) {
      context.commit('ADD_MOVIE', movie)
    },
    movieCompleted(context, movie) {
      context.commit('MOVIE_COMPLETED', movie)
    }
  },
  modules: {
  }
})
