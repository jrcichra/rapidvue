<template>
  <div class="navbar">
    <img class="logo" alt="Vue logo" src="../assets/logo.png" />
    <h1 class="title">RapidVue</h1>
  </div>
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
  align-content: center;
  height: 40px;
  margin-right: 5px;
}
.title {
  font-size: 17px;
}
</style>
