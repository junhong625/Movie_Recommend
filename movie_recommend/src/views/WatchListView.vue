<template>
  <div>
    <h1>보고싶은 영화</h1>
    <form action="">
      <input type="text">
      <button>Add</button>
    </form>
    <br>
    <WatchListItem
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
    />
  </div>
</template>

<script>
import WatchListItem from '@/components/WatchListItem'

export default {
  name: 'WatchListView',
  components: {
    WatchListItem,
  },
  computed: {
    todos() {
      return this.$store.state.todos
    }
  }
}
</script>

<style>

</style>