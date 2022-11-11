<template>
  <div id="app">
    <nav class="navbar justify-content-space p-4" >
      <span>
        <img src="https://edu.ssafy.com/asset/images/logo.png" alt="" style="width:50px; position:relative; top:-4px; left:-4px;">
      </span>
      <ul>
        <li>
          <router-link class="mx-3" :to="{ name: 'movies'}">Movie</router-link> |
        </li>
        <li>
          <router-link class="mx-3" :to="{ name: 'random'}">Random</router-link> |
        </li>
        <li>
          <router-link class="mx-3" :to="{name: 'watchList'}">Watch List</router-link>
        </li>
        <li>
          <router-link class="mx-3" :to="{name: 'randomRecommend'}">Random Recommend</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>   

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
