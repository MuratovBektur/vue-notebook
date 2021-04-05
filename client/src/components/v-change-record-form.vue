<template>
  <div>
    <b-form @submit="onSubmit" @cancel="onCancel">
      <b-row class="align-items-end">
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
          <b-button type="cancel" variant="danger">Отмена</b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

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
    this.form = this.record;
  },
  updated(): void {
    // this.form = null;
    // this.form = { ...this.record };
  },
  data() {
    return {
      form: {
        title: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit(e: Event): void {
      e.preventDefault();
      return;
    },
    onCancel(): void {
      return;
    },
  },
  //   watch:{
  //       record(val){

  //       }
  //   }
});
</script>

<style scoped></style>
