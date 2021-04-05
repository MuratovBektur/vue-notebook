<template>
  <div class="v-card">
    <b-card
      :title="record.title"
      tag="article"
      header-tag="header"
      class="mb-2 cursor-pointer"
    >
      <template v-slot:header>
        <div class="d-flex justify-content-between" @click="changeRecord">
          {{ "#" + record.id }}
          <img src="../assets/img/edit-icon.svg" alt="" />
        </div>
      </template>
      <b-card-text class="text-center">
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
  h4 {
    text-align: center;
  }
}
</style>
