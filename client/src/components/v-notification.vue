<template>
  <div v-if="showNotification" class="v-notification">
    <div class="v-notification__body d-flex align-items-center">
      <img
        v-if="notification.type === 'error'"
        class="mr-2"
        src="../assets/img/x-circle.svg"
        alt="mark"
      />
      <img v-else class="mr-2" src="../assets/img/mark.svg" alt="mark" />
      <div>{{ notification.text }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  computed: {
    ...mapState("record", ["notification", "showNotification"]),
  },
});
</script>

<style lang="scss">
.v-notification {
  position: fixed;
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.72);
  -webkit-box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.72);
  top: 100px;
  right: 100px;
  padding: 10px 15px;
  min-width: 150px;
  min-height: 75px;
  opacity: 0;
  animation: change 2s ease-in-out forwards;
  &__body {
    height: 52px;
  }
}

@keyframes change {
  to {
    opacity: 1;
  }
}
</style>
