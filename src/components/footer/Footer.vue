<template>
  <div class="footer">
      <div class="footer-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum labore accusamus laborum modi libero odio, ipsa ducimus ipsum hic porro aut dolore eveniet? Excepturi esse recusandae provident sequi atque.
      </div>
  </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStackOverflow, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStackOverflow, faGithub, faLinkedinIn, faTwitter)
export default {
  // name: 'footer',
  props: {
    msg: String
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  background-color: #fff;
  display: grid;
  align-self: end;
  align-items: end;
  align-content: end;
  // justify-content: center;
  // justify-items: center;
  // grid-template-columns: 1fr 2fr;
  padding: 2rem 1.5rem;
//   .footer-content {
//       align-self: end;
//   }
}
@media screen and (max-width: 840px) {

}
@media screen and (max-width: 540px) {

}
</style>
