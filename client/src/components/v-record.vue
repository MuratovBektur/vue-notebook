<template>
  <div class="v-card">
    <b-card
      :title="record.title"
      tag="article"
      header-tag="header"
      class="mb-2 cursor-pointer"
    >
      <template v-slot:header>
        <div class="d-flex justify-content-between">
          {{ record.id }}
          <div>
            <img
              @click="changeRecord"
              class="mr-2"
              src="../assets/img/edit-icon.svg"
              alt=""
            />
            <img
              @click="removeRecord(record.id)"
              src="../assets/img/delete-icon.svg"
              alt=""
            />
          </div>
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

import { mapMutations, mapActions } from "vuex";

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
    ...mapActions("record", ["removeRecord"]),
  },
});
</script>

<style lang="scss">
.v-card {
  // margin: 20px auto;
  width: 300px;
  & .card-title {
    text-align: center;
  }
  & .card-header {
    padding: 8px 10px;
  }
}
</style>
