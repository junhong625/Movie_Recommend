<template>
  <div class="container">
    <h1>{{ todayWeather }}에는 {{ this.$store.state.recommendMovieByWeather[this.todayWeather] }} 장르의 영화들 어때요?</h1>
    <button class="my-4" @click="findMovie">PICK</button>
    <br>
    <div v-if="movie" class="card m-auto p-0 col-3 d-flex justify-content-center" style="">
      <img :src="posterImageUrl" class="card-img-top" style="height:30rem" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <hr>
        <p class="card-text">{{ overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RandomView',
  data(){
    return {
      recommend_movies: [],
      todayWeather: null,
      todayGenres: [],
      movie:null,
      // posterImageUrl : 'https://image.tmdb.org/t/p/w500/' + this.movie.poster_path,
    }
  },
  computed: {
    overview() {
      return this.movie.overview.slice(0, 55) + '...'
    },
    posterImageUrl() {
      return 'https://image.tmdb.org/t/p/w500/' + this.movie.poster_path
    }
  },
  methods: {
    findMovie() {
      const movies = this.$store.state.movies
      for (let i=0 ; i < 20; i++) {
        movies[i].genre_ids.forEach((id)=> {
          if (this.todayGenres.includes(id)) {
            this.recommend_movies.push(movies[i])
          }
        })
      }
      this.movie = this.recommend_movies[Math.floor(Math.random() * this.recommend_movies.length)]
    }
  },
  created() {
    axios({
      methods: 'get',
      url: 'https://api.openweathermap.org/data/2.5/weather', 
      params: {
        q: `Seoul,kor`,
        appid: '3229f93279f40e3ba9d9e6bdc5d84c7d',  
      }
    })
    .then(response => {
      // this.todayWeather = response
      if (response.data.weather[0].id < 300) {
        this.todayWeather = '천둥, 번개치는 날'
      } else if (response.data.weather[0].id < 600) {
        this.todayWeather = '비 내리는 날'
      } else if (response.data.weather[0].id < 700) {
        this.todayWeather = '눈 내리는 날'
      } else if (response.data.weather[0].id < 800) {
        this.todayWeather = '안개 또는 먼지 낀 날'
      } else {
        this.todayWeather = '맑은 날'
      }
      this.$store.state.recommendMovieByWeather[this.todayWeather]
      .forEach((genre) => {
        this.todayGenres.push(this.$store.state.genres[genre])
      })
    })
    // .then(res => {
    //   console.log(res)
    //   const movies = this.$store.state.movies
    //   for (let i=0 ; i < 20; i++) {
    //     console.log(movies[i].genre_ids)
    //     movies[i].genre_ids.forEach((id)=> {
    //       if (this.todayGenres.includes(id)) {
    //         this.recommend_movies.push(movies[i])
    //       }
    //     })
    //   }
    //   this.movie = this.recommend_movies[Math.floor(Math.random() * this.recommend_movies.length)]
    // })
  }
}

</script>

<style>

</style>