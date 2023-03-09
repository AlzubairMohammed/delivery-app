<template>
  <div>
   <app-header></app-header>
    <router-view />
  <side-nav/>
  </div>
</template>
<script>
import AppHeader from './components/AppHeader.vue'
 import SideNav from './components/sideNav.vue';
 export default {
  components: { AppHeader,SideNav
 },
 }
</script>
<style>
#app {
  font-family: Cairo,"Times New Roman", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  text-transform:capitalize;
} 
 
</style>