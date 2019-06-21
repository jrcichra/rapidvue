<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Adding my own badass link</h2>
      <li>
        <router-link to="/HelloWorld2/">
        <a>HelloWorld2</a>
        </router-link>
      </li>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Justin is really smelly"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
