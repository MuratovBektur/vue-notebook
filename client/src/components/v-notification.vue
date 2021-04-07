<template>
  <div v-if="isShow" class="v-notification">test</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      isShow: true,
    };
  },
});
</script>

<style>
.v-notification {
  position: fixed;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.72);
  -webkit-box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.72);
  top: 100px;
  right: 100px;
  padding: 10px 15px;
  min-width: 150px;
  min-height: 75px;
}
</style>
