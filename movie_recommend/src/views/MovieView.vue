<template>
  <div class="container d-flex">
    <div class="row justify-content-center p-0">
      <MovieCard
        v-for="(movie, index) in movies"
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
  data() {
    return {
      movies: [],
    }
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
      this.movies.push(response)
      this.movies = this.movies[0].data.results
      this.movies = Object.fromEntries(
    Object.entries(this.movies).sort(([,a],[,b]) => a-b))
      console.log(this.movies)
    })
    .catch(error => {
      console.log(error)
    })


    // 장르 데이터
    // axios({
    //   method: 'get',
    //   url: 'https://api.themoviedb.org/3/genre/movie/list',
    //   params: {
    //     api_key: "7258d1fb8f49e6fdd21d6189e050655b",
    //     language: 'ko-KR',
    //   }
    // })
    // .then(response => {
    //   console.log(response)
    // })
  }
}
</script>

<style>

</style>