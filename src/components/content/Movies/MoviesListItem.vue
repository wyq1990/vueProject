<template>
  <div class="movies-item" @click="itemClick">
    <img :src="getImage" alt="" @load="imageLoad">
    <div class="movie-info">
      <p>{{moviesItem.movieName}}}</p>
    </div>
  </div>
</template>

<script>
  import {getImages} from "@/common/utils";

  export default {
    name: "MoviesListItem",
    props: {
      moviesItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      // getImages( _url ){
      //   if( _url !== undefined ){
      //     let _u = _url.substring( 7 );
      //     return 'https://images.weserv.nl/?url=' + _u;
      //   }
      // },
      imageLoad() {
        this.$bus.$emit('itemImageLoad')
      },
      itemClick() {
        console.log('跳转下个界面');
        this.$router.push('/detail/' + this.moviesItem.id)
      }
    },
    computed: {
      getImage() {
        return getImages(this.moviesItem.movieImg)
      }
    }
  }
</script>

<style scoped>
  .movies-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .movies-item img {
    width: 100%;
    border-radius: 5px;
  }

  .movie-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    color: red;
  }
</style>