<template>
  <div id="this-item"
    @click="movieWatched"
    :class="[!movie.isWatched? 'uncompleted':'completed']"
  >
    {{ movie.title }}
  </div>
</template>

<script>
export default {
  name: 'WatchListItem',
  data() {
    return {
    }
  },
  props: {
    movie: Object,
  },
  methods: {
    movieWatched() {
      this.$store.dispatch('movieCompleted', this.movie)
    },
  }
}
</script>

<style>
#this-item:hover {
  background-color:lightsteelblue;
  border-radius: 20px;
}
.completed {
  text-decoration: line-through;
  background-color:cornflowerblue;
  border-radius: 20px;
}
.uncompleted {
  background-color: aliceblue;
}

</style>