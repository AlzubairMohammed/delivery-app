<template>
  <div>
   <app-header></app-header>
   <side-nav/>
    <router-view />
  
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
.dark{
  background-color: black !important;
}
 :root{
  --main-color:rgb(20, 13, 5);
  --sec-color:rgb(245, 137, 5);
 }
</style>