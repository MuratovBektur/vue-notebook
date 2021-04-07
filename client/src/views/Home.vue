<template>
  <div>
    <div v-if="isLoaded" class="home">
      <h1 align="center" class="mt-5">Все записи</h1>
      <vChangeRecordForm />
      <vRecordList />
    </div>
    <div
      v-else
      class="h-screen d-flex align-items-center justify-content-center mb-3"
    >
      <b-spinner label="Loading..."></b-spinner>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";

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
    this.fetchRecords();
  },

  methods: {
    ...mapActions("record", ["fetchRecords"]),
  },

  computed: {
    ...mapState("record", ["isLoaded"]),
  },

  watch: {
    showForm(val: boolean) {
      console.log("val", val);
    },
    isLoaded(val: boolean) {
      console.log("loaded", val);
    },
  },
});
</script>
