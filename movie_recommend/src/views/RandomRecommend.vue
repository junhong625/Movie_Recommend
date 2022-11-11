<template>
  <div>
    <div>
      <button type="button" class="btn btn-success" style="width: 200px; !important; margin: 20px;" @click="pickRandomMovie">Pick</button>
    </div>
    <!-- <img :src="posterUrl" alt=""> -->
    <div class="movie_card" id="bright">
      <div class="info_section">
        <img :src="bgPosterUrl" alt="bgImg" style="z-index:-1; position: absolute; left:-150px; width:1000px;">
        <div class="movie_header">
          <img :src="posterUrl" alt="miniPosterUrl">
          <h1>{{ movieTitle }}</h1>
          <h4>{{ releaseDate }}</h4>
          <span class="minutes">{{ voteAverage }}</span>
        </div>
        <div class="movie_desc">
          <p class="text">
            {{ overview }}
          </p>
        </div>
      </div>
    </div>
    <div class="blur_back bright_back"></div>
    <!-- <img :src="bgPosterUrl" alt=""> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RandomView',
  data() {
    return {
      posterUrl : null,
      movieTitle: null,
      bgPosterUrl: null,
      releaseDate: 0,
      voteAverage: 0,
      overview: null,
    }
  },
  methods: {
    pickRandomMovie() {
      axios({
        methods: 'GET',
        url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=26f430349f35e05f01c48db888f30795',
        region: 'KR',
        page: 1,
      })
        .then((res) => {
          console.log(res.data.results[Math.ceil(Math.random()*19)])
          const responseMovieData = res.data.results[Math.ceil(Math.random()*19)]
          const posterUrl = responseMovieData.poster_path
          // console.log(posterUrl)
          this.posterUrl = 'https://image.tmdb.org/t/p/original' + posterUrl
          this.movieTitle = responseMovieData.title
          this.bgPosterUrl = 'https://image.tmdb.org/t/p/original' + responseMovieData.backdrop_path
          this.releaseDate = String(responseMovieData.release_date)
          this.voteAverage = responseMovieData.vote_average
          this.overview = responseMovieData.overview
        })
    }
  },
  created() {
    this.pickRandomMovie()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800');
 * {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Montserrat', helvetica, arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
 }

.movie_card{
    position: relative;
    display: block;
    width: 800px;
    height: 350px;
    margin: 100px auto; 
    overflow: hidden;
    border-radius: 10px;
    transition: all 0.4s;
  }

.info_section {
  /* border: 1px solid red; */
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
  /* background: linear-gradient(to right, #0d0d0c 50%, transparent 100%), url('https://media.istockphoto.com/id/1336937059/photo/film-reels-on-black-background-movie-video-and-cinema-prodaction-and-edition-concept.jpg?b=1&s=170667a&w=0&k=20&c=3Y_OD6qSJIP-9DNcNk-yIZ7CrcOJOLpFr2jfWIbegZA='); */
  /* background:linear-gradient(
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0.5) 25%,
    rgba(0, 0, 0, 0.7) 40%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 75%,
  ); */
}

.movie_header {
  /* border: 1px solid blue; */
  position: relative;
  padding: 25px;
  height: 40%;
}

.movie_header > img {
  position: relative;
  float: left;  
  margin-right: 20px;
  height: 120px;
  box-shadow: 0 0 20px -10px;
}

.movie_header > h1 {
  color: #fff;
  font-weight: 250;
  position: absolute;
  top: 25px;
  left: 130px;
}

.movie_header > h4 {
  color: #9ac7fa;
  font-weight: 400;
  position: absolute;
  left: 130px;
  top: 70px;
}

.movie_header .minutes {
  position: absolute;
  left: 250px;
  top: 57px;
  padding-left: 10px;
  display: inline-block;
  margin-top: 10px;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(255,255,255,0.13);
}

.movie_desc {
  height: 50%;
  position: absolute;
  top: 150px;
  left: 22px;
  width: 500px;
  text-align: left;
}

.movie_desc .text {
  color: #cfd6e1;
  line-height: 22px;
}

.bright_back{
  background: url("https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg");
}

#bright{
  box-shadow: 0px 0px 150px -45px rgba(66, 63, 62, 0.5);
  /* &:hover{
    box-shadow: 0px 0px 120px -55px rgba(255, 51, 0, 0.5);
  } */
}

.blur_back{
    position: absolute;
    top: 0;
    z-index: 1;
    height: 100%; right: 0;
    background-size: cover;
    border-radius: 11px;
}
</style>