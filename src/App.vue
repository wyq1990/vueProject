<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar>底部导航栏</main-tab-bar>
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