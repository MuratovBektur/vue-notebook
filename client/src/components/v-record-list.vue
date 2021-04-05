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

import vRecord from "./v-record.vue";

export default Vue.extend({
  components: {
    vRecord,
  },
  data() {
    return {
      recordList: [
        {
          id: 1,
          title: "title1",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, provident cumque.",
        },
        {
          id: 2,
          title: "title2",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, provident cumque.",
        },
        {
          id: 3,
          title: "title3",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sapiente expedita, modi, eveniet perspiciatis vitae. Totam sit culpa eum, quod placeat iure, temporibus sed voluptate laudantium blanditiis error quidem! Illum voluptatum, placeat repellat.",
        },
        {
          id: 4,
          title: "title1",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, provident cumque.",
        },
        {
          id: 5,
          title: "title1",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, provident cumque.",
        },
        {
          id: 6,
          title: "title1",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sapiente expedita, modi, eveniet perspiciatis vitae. Totam sit culpa eum, quod placeat iure, temporibus sed voluptate laudantium blanditiis error quidem! Illum voluptatum, placeat repellat.",
        },
        {
          id: 7,
          title: "title1",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sapiente expedita, modi, eveniet perspiciatis vitae. Totam sit culpa eum, quod placeat iure, temporibus sed voluptate laudantium blanditiis error quidem! Illum voluptatum, placeat repellat.",
        },
        {
          id: 8,
          title: "title1",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sapiente expedita, modi, eveniet perspiciatis vitae. Totam sit culpa eum, quod placeat iure, temporibus sed voluptate laudantium blanditiis error quidem! Illum voluptatum, placeat repellat.",
        },
      ],
    };
  },
});
</script>

<style scoped>
</style>