<template>
  <div class="head">
    <div class="menu">
      <ul>
        <li><a href="#">Compétences</a></li>
        <li><a href="#">Réalisations</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'Head',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {
  background-color: #fff;
  display: grid;
  justify-content: center;
  justify-items: center;
  padding: 1rem;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: inline-block;
  margin: auto .5rem;
}
a {
  text-decoration: none;
}
li:before {
  content: "/";
}
</style>
