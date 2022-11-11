<template>
  <div></div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RandomView',
  created() {
    axios.get('https://api.themoviedb.org/3/movie/top_rated')
      .then((res) => {
        console.log(res)
      })
  }
}
</script>

<style>

</style>