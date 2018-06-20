<template>
  <div class="hero">
    <div class="logo">
      <img src="../assets/kain.jpeg" alt="Logo sir_kane">
    </div>
    <div class="presentation">
      <h1>Développeur Web, Desktop & Mobile</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptates praesentium aut doloribus fugit consectetur, doloremque ad earum quo in vel magnam quidem id tenetur repellat repudiandae. Illum, totam aliquid.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'hero',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero {
  background-color: #fff;
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: 1fr 2fr;
  padding: 3rem 0;
}
.logo {
  place-self: center;
}
img {
  height: 180px;
}
</style>
