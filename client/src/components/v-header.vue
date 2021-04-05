<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->
      <b-container class="justify-content-start">
        <b-navbar-brand to="/" class="mr-5"> Главная </b-navbar-brand>

        <b-navbar-brand to="/about"> Добавить новую запись </b-navbar-brand>
      </b-container>
    </b-navbar>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped></style>
