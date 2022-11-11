<template>
    <div class="card col-3 m-2 p-0" style="">
      <img :src="posterImageUrl" class="card-img-top" style="height:30rem" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <hr>
        <p class="card-text">{{ overview }}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie:Object
  },
  data() {
    return {
      posterImageUrl : 'https://image.tmdb.org/t/p/w500/' + this.movie.poster_path,
      overview : this.movie.overview.slice(0, 55) + '...'
    }
  }
}
</script>

<style>

</style>