<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view/>
  </div>
</template>

<style>
  @import "./assets/css/Base.css";
</style>
<script>
  import MainTabBar from "./components/mainTabbar/MainTabBar";
  export default {
    components: {MainTabBar}
  }
</script>