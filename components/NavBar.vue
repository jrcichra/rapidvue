<template>
  <b-container fluid class="navbar">
    <b-row>
      <b-col>
        <img class="logo" alt="Vue logo" src="../assets/logo.png" />
      </b-col>
      <b-col>
        <h1 class="title">RapidVue</h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.navbar {
  background-color: rgb(39, 143, 79);
  border-radius: 3px;
  padding: 5px;
}
.logo {
  height: 40px;
}
.title {
  font-size: 17px;
  margin-top: 0.6rem;
}
</style>
