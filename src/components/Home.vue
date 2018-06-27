<template>
  <div>
    <Head></Head>
    <Hero></Hero>
    <Competences></Competences>
    <Realisations></Realisations>

  </div>
</template>

<script>
import Head from './head/Head.vue'
import Hero from './hero/Hero.vue'
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
    Realisations
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
