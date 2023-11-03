<template>
  <NavBar />
    <!-- <Home-Page></Home-Page> -->
    <router-view/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HomePage from "./components/views/HomePage.vue";
import NavBar from '@/components/views/NavBar.vue';

export default {
  name: 'nav-bar',
  components: {
    // HelloWorld,
    // HomePage,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
