<template>
  <div>
    <Head></Head>
    <Hero></Hero>
    <Competences></Competences>

  </div>
</template>

<script>
import Head from './Head.vue'
import Hero from './Hero.vue'
import Competences from './Competences.vue'
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
    Competences
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// h1,
// h2 {
//   font-weight: normal;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
//   a {
//     color: #42b983;
//   }
// }
</style>
