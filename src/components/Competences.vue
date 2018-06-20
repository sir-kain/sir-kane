<template>
  <div class="competences" id="competences">
    <!-- grid section  -->
    <div class="line">
      <div class="box v-span">
        <div class="competence">
          <img src="http://jonathan-boyer.fr/images/skills/html5.png" alt="">
        <span>Html 5</span>
        </div>
         <div class="competence">
          <img src="http://jonathan-boyer.fr/images/skills/html5.png" alt="">
        <span>Html 5</span>
        </div>
      </div>

      <div class="box h-span">
         <div class="competence">
          <img src="http://jonathan-boyer.fr/images/skills/html5.png" alt="">
        <span>Html 5</span>
        </div>
         <div class="competence">
          <img src="http://jonathan-boyer.fr/images/skills/html5.png" alt="">
        <span>Html 5</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img src="http://jonathan-boyer.fr/images/skills/html5.png" alt="">
        <span>Html 5</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img src="http://jonathan-boyer.fr/images/skills/html5.png" alt="">
        <span>Html 5</span>
        </div>
      </div>

      <div class="box h-span">
         <div class="competence">
          <img src="http://jonathan-boyer.fr/images/skills/html5.png" alt="">
        <span>Html 5</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img src="http://jonathan-boyer.fr/images/skills/html5.png" alt="">
        <span>Html 5</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img src="http://jonathan-boyer.fr/images/skills/html5.png" alt="">
        <span>Html 5</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img src="http://jonathan-boyer.fr/images/skills/html5.png" alt="">
        <span>Html 5</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img src="http://jonathan-boyer.fr/images/skills/html5.png" alt="">
        <span>Html 5</span>
        </div>
      </div>
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
<style scoped lang="scss">
.competences {
  // display: grid;
  // border: 1px solid red;
  margin: 1rem 0;
  // padding: 1rem;
}
.line {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  .box {
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06);
    padding: 18px 20px;
    display: grid;
  }
  .v-span {
    grid-row: span 2;
    grid-template-rows: repeat(2, 1fr);
  }
  .h-span {
    grid-column: span 2;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
