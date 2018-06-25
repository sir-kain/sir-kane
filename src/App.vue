<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #eee;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
}
a {
  text-decoration: none;
}
h1, h2 {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  display: grid;
  margin: auto 20%;
  /* border: 1px solid rebeccapurple; */
  box-sizing: border-box;
}

@media screen and (max-width: 840px) {
 #app {
   margin: 0;
 }
}

@media screen and (min-width: 840px) and (max-width: 1040px) {
 #app {
   margin: auto 8%;
 }
}

</style>
