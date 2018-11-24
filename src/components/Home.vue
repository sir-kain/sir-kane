<template>
  <div class="home">
    <Head></Head>
    <Hero></Hero>
    <Competences></Competences>
    <Realisations></Realisations>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Head from './head/Head.vue'
import Hero from './hero/Hero.vue'
import Footer from './footer/Footer.vue'
import Competences from './competence/Competences.vue'
import Realisations from './realisation/Realisations.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Head,
    Hero,
    Competences,
    Realisations,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .home {
    box-sizing: border-box;
    // min-height: 100vh;
    margin: 0 auto;
    padding: 0 auto;
    display: grid;
  }
</style>
