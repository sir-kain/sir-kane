<template>
  <div id="app">
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
  background-color: rgb(238, 238, 238);
  color: #000;
}
img {
  filter: grayscale(95%);
}
img:hover {
  filter: grayscale(0)
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
  font-size: 1.4em;
  color: #000;
}
h2 {
  font-size: 1.2em;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  display: grid;
  margin: auto 19%;
  padding: 0 .35rem;
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
