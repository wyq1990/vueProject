<template>
  <div id="detail">
    <custom-nav-bar :nav-bar-title="title" nav-bar-back-btn="返回" :show-arrow="true"></custom-nav-bar>
    <scroll class="detail-content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true">
          <img :src="getImage" @load="imageLoad">
          <p>{{title}}</p>
          <p>{{content}}</p>
          <p>{{content}}</p>
          <p>{{content}}</p>
          <p>{{content}}</p>
          <p>{{content}}</p>
          <p>{{content}}</p>
      <p>{{content}}</p>
      <p>{{content}}</p>
      <p>{{content}}</p>
      <p>{{content}}</p>
      <p>{{content}}</p>
      <p>{{content}}</p>
    </scroll>


  </div>
</template>

<script>
  import CustomNavBar from "@/components/common/navbar/CustomNavBar";
  import Scroll from "@/components/common/scroll/Scroll";
  import {getMovieDetail} from "@/network/detail";
  import {getImages} from "@/common/utils";
  export default {
    name: "Detail",
    components: {Scroll, CustomNavBar},
    data() {
      return {
        id: null,
        title: '详情',
        image: '',
        content: ''
      }
    },
    created() {
      this.id = this.$route.params.id
      this.getMovieDetail()
    },
    methods: {
      getMovieDetail() {
        getMovieDetail(this.id).then(res => {
          console.log(res);
          this.title = res.data.movieName
          this.image = res.data.movieImg
          this.content = res.data.movieContent
        })
      },
      imageLoad() {
        this.$refs.scroll.refresh()
      }
    },
    computed: {
      getImage() {
        return getImages(this.image)
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .detail-content img {
    width: 100%;
  }
</style>