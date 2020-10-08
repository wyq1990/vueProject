<template>
  <van-nav-bar :title="navBarTitle" :left-text="navBarBackBtn" @click-left="backClicked" :left-arrow="showArrow"/>
</template>

<script>
  import {NavBar} from 'vant'

  export default {
    name: "CustomNavBar",
    components:{
      [NavBar.name]: NavBar,
    },
    props: {
      navBarTitle: {
        type: String,
        default() {
          return ''
        }
      },
      navBarBackBtn: {
        type: String,
        default() {
          return ''
        }
      },
      showArrow: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
    methods: {
      backClicked() {
        this.$router.back()
      }
    }

  }
</script>

<style scoped>

</style>