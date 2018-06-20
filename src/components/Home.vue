<template>
  <div>
    <Head></Head>
    <Hero></Hero>
    <Competences></Competences>
    <Realisations></Realisations>

  </div>
</template>

<script>
import Head from './Head.vue'
import Hero from './Hero.vue'
import Competences from './Competences.vue'
import Realisations from './Realisations.vue'
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
