<template>
  <div v-if="showForm">
    <b-form @submit="onSubmit">
      <b-row class="align-items-center">
        <b-col sm="12" md="4" class="d-flex justify-content-center">
          <b-form-group
            class="mb-0 mt-3"
            id="input-group-1"
            label="Заголовок записи"
            label-for="input-1"
          >
            <b-form-input
              autofocus
              id="input-1"
              v-model="form.title"
              placeholder="Заголовок записи"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col sm="12" md="4" class="d-flex justify-content-center">
          <b-form-group
            class="mb-0 mt-3"
            id="input-group-2"
            label="Текст записи"
            label-for="input-2"
          >
            <b-form-textarea
              id="input-2"
              v-model="form.text"
              placeholder="Текст записи"
              required
            ></b-form-textarea>
          </b-form-group>
        </b-col>

        <b-col sm="12" md="4" class="d-flex justify-content-center mt-3">
          <b-button type="submit" variant="success" class="mr-3"
            >Изменить</b-button
          >
          <b-button @click="onCancel" variant="primary">Отмена</b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { mapState, mapMutations } from "vuex";

// interface ComplexRecord {
//   id: number;
//   title: string;
//   text: string;
// }

export default Vue.extend({
  // props: {
  //   record: {
  //     type: Object as PropType<ComplexRecord>,
  //     required: true,
  //     // validator (record: ComplexRecord) {
  //     //   return !!message.title;
  //     // }
  //   },
  // },
  mounted() {
    this.form = { ...this.record };
  },
  updated(): void {
    // this.form = { ...this.record };
    console.log("updated", this.form);
    // if (this.record.id != this.form.id) {
    //   this.form = {
    //     id: -2,
    //     title: "",
    //     text: "",
    //   };
    //   this.form = this.record;
    // }
  },
  data() {
    return {
      form: {
        id: -1,
        title: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit(e: Event): void {
      e.preventDefault();
      this.EDIT_RECORD(this.form);
    },
    onCancel(): void {
      console.log("oncancel");
      this.CANCEL_EDITING();
    },
    ...mapMutations("record", ["CANCEL_EDITING", "EDIT_RECORD"]),
  },
  computed: {
    ...mapState("record", ["showForm", "record"]),
  },
  watch: {
    record(val) {
      this.form = { ...val };
    },
  },
});
</script>

<style scoped>
#input-2 {
  display: inline-block;
  border: solid 1px #000;
  min-height: 10px;
}
</style>
