<template>
  <div>
    <custom-nav-bar nav-bar-title="首页" class="nav-bar"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <movies-list :movies="showMovies"/>
    </scroll>

  </div>
</template>

<script>
    import {getMovieList} from "@/network/home";
    import { Toast } from 'vant';
    import CustomNavBar from "@/components/common/navbar/CustomNavBar";
    import Scroll from "@/components/common/scroll/Scroll";
    import MoviesList from "@/components/content/Movies/MoviesList";

    export default {
      name: "Home",
      components: {
        MoviesList,
        Scroll,
        CustomNavBar,
      },
      data() {
        return {
          movieList: [],
          page: 1,
          limit: 20
        }
      },
      created() {
        this.getMovieList()
      },
      mounted() {
        this.$bus.$on('itemImageLoad', () => {
          this.$refs.scroll.refresh()
        })
      },
      methods: {
        getMovieList() {
          const start = this.limit * (this.page - 1)
          getMovieList(start).then(res => {
            // this.movieList = res.data.items
            this.movieList.push(...res.data.items)
            this.page += 1

            this.$refs.scroll.finishPullUp()
          })
        },
        loadMore() {
          // this.getHomeGoods(this.currentType)
          this.getMovieList()
        },
      },
      computed: {
        showMovies() {
          console.log(this.movieList);
          return this.movieList
        }
      }
    }
</script>

<style scoped>
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>