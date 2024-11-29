<template>
    <app-header/>
  <router-view>
  </router-view>
  <!-- <app-footer/> -->
  

</template>

<script>
import AppHeader from './components/AppHeader.vue';
// import AppFooter from './components/AppFooter.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
    // AppFooter
  }
}
</script>

<style>
body{
  margin: 0%;
  padding: 0px;
  background-color: #F2F2F2;

}
#app {
  margin: 0px;
  padding:  0%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

