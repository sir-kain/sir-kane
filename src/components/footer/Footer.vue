<template>
  <div class="footer">
      <div class="footer-content">
        © sir_kane
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
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, 1fr);
  .footer-content {
    grid-column-start: 9;
    grid-row-start: 2;
  }
}
@media screen and (max-width: 840px) {

}
@media screen and (max-width: 540px) {

}
</style>
