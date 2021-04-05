<template>
  <div class="mt-5">
    <b-row class="mx-0">
      <b-col
        v-for="record of recordList"
        :key="record.id"
        sm="12"
        md="6"
        lg="4"
        class="px-0 mb-4 d-flex justify-content-center"
      >
        <vRecord :record="record" />
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

import vRecord from "./v-record.vue";

export default Vue.extend({
  components: {
    vRecord,
  },
  computed: {
    ...mapState("record", ["recordList"]),
  },
});
</script>

<style scoped></style>
