<template>
  <div>
   <app-header></app-header>
    <router-view />
  </div>
</template>
<script>
import AppHeader from './components/AppHeader.vue'
import AppHeaderVue from './components/AppHeader.vue'

export default {
  components: { AppHeader },
  AppHeaderVue,
}
</script>
<style>
#app {
  font-family:Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  text-transform:capitalize;
  color: #2c3e50;
}
 router-link {
   color: #270330 !important;
}
</style>