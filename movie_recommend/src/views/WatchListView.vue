<template>
  <div>
    <div id="form">
      <h1>Watch List</h1>
      <input type="text" v-model.trim="movieInput" id="input-title">
      <button class="button btn-success" @click="addMovie">Add</button>
    </div>
    <WatchListItem class="form-list"
      v-for="(movie, index) in movieList" :key="index"
      :movie="movie"
    />
  </div>
</template>

<script>
import WatchListItem from '@/components/WatchListItem'

export default {
  name: 'WatchListView',
  components: {
    WatchListItem
  },
  data() {
    return {
      movieInput: null,
    }
  },
  computed: {
    movieList() {
      return this.$store.state.movieList
    }
  },
  methods: {
    addMovie() {
      if (this.movieInput) {
        const movieObj = {
          title: this.movieInput,
          isWatched: false,
        }
        this.$store.dispatch('addMovie', movieObj)
      }
      this.movieInput = null
    }
  },
}
</script>

<style>

#form {
  width: 1000px;
  background: #87CEEB;
  border-top-left-radius: 20px 20px;
  border-top-right-radius: 20px 20px;
  padding-top: 30px;
  padding-bottom: 20px;
  margin: 0 auto;
  margin-top: 20px;
}

#input-title {
  margin: 10px;
}

.form-list {
  width: 1000px;
  padding: 20px;
  margin: 0 auto;
}

.form-list:last-child() {
  border-bottom-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
</style>