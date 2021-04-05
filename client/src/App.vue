<template>
  <div id="app">
    <vHeader />
    <b-container> <router-view /></b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import vHeader from "./components/v-header.vue";
export default Vue.extend({
  components: {
    vHeader,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
