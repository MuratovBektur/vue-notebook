<template>
  <header>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->
      <b-container class="justify-content-start">
        <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav variant="primary" type="light">
            <b-nav-item @click="fetchRecords" to="/" class="mr-5">
              Главная
            </b-nav-item>

            <b-nav-item to="/add-record"> Добавить новую запись </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                v-model="searchInput"
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button
                size="sm"
                class="my-2 my-sm-0"
                type="submit"
                @click="onSubmit"
                >Search</b-button
              >
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    async onSubmit() {
      await this.fetchRecordById(this.searchInput);
      this.searchInput = "";
    },
    ...mapActions("record", ["fetchRecordById", "fetchRecords"]),
  },
});
</script>

<style scoped></style>
