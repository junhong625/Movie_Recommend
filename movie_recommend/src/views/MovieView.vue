<template>
  <div class="container d-flex">
    <div class="row justify-content-center p-0">
      <MovieCard
        v-for="(movie, index) in this.$store.state.movies"
        :key="index"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MovieCard from '@/components/MovieCard'

export default {
  name: 'MovieView',
  components: {
    MovieCard,
  },
  created() {
    axios({
      methods: 'get',
      url: 'https://api.themoviedb.org/3/movie/top_rated',
      params: {
        api_key: "7258d1fb8f49e6fdd21d6189e050655b",
        language: 'ko-KR',
      }
    })
    .then(response => {
      // this.$store.state.movies.push(response)
      let movies = response
      console.log(movies)
      movies = movies.data.results
      movies = Object.fromEntries(
      Object.entries(movies).sort(([,a],[,b]) => a-b))
      
      console.log(movies)
      this.$store.commit('SAVE_MOVIES', movies)
    })
    .catch(error => {
      console.log(error)
    })


    // 장르 데이터
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/genre/movie/list',
      params: {
        api_key: "7258d1fb8f49e6fdd21d6189e050655b",
        language: 'ko-KR',
      }
    })
    .then(response => {
      // console.log(response)
      const genresList = response.data.genres
      const genres = {}
      genresList.forEach((genre) => {
        // console.log(genre)
        genres[genre.name] = genre.id
      })
      this.$store.commit('SAVE_GENRES', genres)
    })
  }
}
</script>

<style>

</style>