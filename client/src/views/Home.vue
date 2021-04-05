<template>
  <div class="home">
    <h1 align="center" class="mt-5">Все записи</h1>
    <vChangeRecordForm v-if="showForm" :record="record" />
    <vRecordList />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

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
  updated() {
    console.log(this.showForm);
  },
  mounted() {
    console.log(this.showForm);
    console.log(this.$store);
  },
  computed: {
    ...mapState("record", ["showForm", "record"]),
  },
  watch: {
    showForm(val) {
      console.log("val", val);
    },
  },
});
</script>
