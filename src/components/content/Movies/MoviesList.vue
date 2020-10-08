<template>
  <div class="movies">
    <movies-list-item v-for="item in movies" :movies-item="item"/>
  </div>
</template>

<script>
import MoviesListItem from "@/components/content/Movies/MoviesListItem";
  export default {
    name: "MoviesList",
    components: {MoviesListItem},
    props: {
      movies: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>