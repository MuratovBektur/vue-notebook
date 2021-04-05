<template>
  <div class="home">
    <h1 align="center" class="mt-5">Все записи</h1>
    <vChangeRecordForm />
    <vRecordList />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import vRecordList from "../components/v-record-list.vue";
import vChangeRecordForm from "../components/v-change-record-form.vue";
export default Vue.extend({
  components: {
    vRecordList,
    vChangeRecordForm,
  },
  // data() {
  //   return {
  //     showForm: false,
  //   };
  // },
  mounted() {
    console.log(this.$store);
  },

  watch: {
    showForm(val) {
      console.log("val", val);
    },
  },
});
</script>
