<template>
  <div class="v-card" @click="changeRecord">
    <b-card
      :title="record.title"
      tag="article"
      :header="'#' + record.id"
      class="mb-2 cursor-pointer"
    >
      <b-card-text>
        {{ record.text }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { mapMutations } from "vuex";

interface ComplexRecord {
  id: number;
  title: string;
  text: string;
}

export default Vue.extend({
  props: {
    record: {
      type: Object as PropType<ComplexRecord>,
      required: true,
      // validator (record: ComplexRecord) {
      //   return !!message.title;
      // }
    },
  },
  mounted() {
    // console.log(this.record);
  },
  methods: {
    changeRecord() {
      this.CHANGE_RECORD(this.record);
    },
    ...mapMutations("record", ["CHANGE_RECORD"]),
  },
});
</script>

<style lang="scss">
.v-card {
  // margin: 20px auto;
  width: 256px;
}
</style>