<template>
  <div class="add-record">
    <b-form @submit="onSubmit">
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

      <div class="mt-5 d-flex justify-content-center">
        <b-button v-if="isLoaded" type="submit" variant="success" class="mr-3"
          >Добавить</b-button
        >

        <b-button v-else variant="success" disabled class="mr-3">
          <b-spinner small type="grow"></b-spinner>
          Добавляется
        </b-button>
        <b-button @click="onCancel" variant="primary">Отмена</b-button>
      </div>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  data() {
    return {
      form: {
        title: "",
        text: "",
      },
      isLoaded: true,
    };
  },
  methods: {
    async onSubmit(e: Event) {
      try {
        e.preventDefault();
        this.isLoaded = false;
        let result = await this.addRecord(this.form);
        if (result) {
          this.isLoaded = true;
          this.form = {
            title: "",
            text: "",
          };
        }
      } catch (e) {
        console.error(e);
      }
    },
    onCancel() {
      console.log("");
    },
    ...mapActions("record", ["addRecord"]),
  },
});
</script>

<style lang="scss" scoped>
.add-record {
  max-width: 360px;
  margin: 100px auto 0;
}
</style>
