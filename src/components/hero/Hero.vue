<template>
  <div class="hero">
    <div class="img-hero">
      <img style="filter: grayscale(0)" src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538255702/sir_kane.jpg" alt="image sir_kane">
    </div>
    <div class="presentation">
      <h1>Web developer</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptates praesentium aut doloribus fugit consectetur, totam aliquid.
      </p>
      <ul>
        <!-- <li><a href="https://github.com/sir-kain" target="__blank" title="Github"><font-awesome-icon :icon="['fab', 'github']" /></a></li> -->
        <li>
          <img :src="githubIcon" alt="Github" width="32" height="32">
        </li>
        <!-- <li><a href="https://stackoverflow.com/users/8319507/sir-kane" target="__blank" title="Stackoverflow"><font-awesome-icon :icon="['fab', 'stack-overflow']" /></a></li> -->
        <li>
          <img :src="stackOverflowIcon" alt="StackOverflow" width="32" height="32">
        </li>
        <!-- <li><a href="https://www.linkedin.com/in/ndiaye-ahmadou-waly-a61056ba/" target="__blank" title="Linkedin"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a></li> -->
        <li>
          <img :src="linkedInIcon" alt="LinkedIn" width="32" height="32">
        </li>
        <!-- <li><a href="https://twitter.com/_sir_kane" target="__blank" title="Twitter @_sir_kane"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li> -->
        <li>
          <img :src="twitterIcon" alt="Twitter" width="32" height="32">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStackOverflow, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStackOverflow, faGithub, faLinkedinIn, faTwitter)
export default {
  // name: 'hero',
  props: {
    msg: String
  },
  data () {
    return {
      twitterIcon: 'https://res.cloudinary.com/dpdwdstqt/image/upload/v1545589417/portfolio/icons/twitter.svg',
      stackOverflowIcon: 'https://res.cloudinary.com/dpdwdstqt/image/upload/v1545589417/portfolio/icons/so.svg',
      githubIcon: 'https://res.cloudinary.com/dpdwdstqt/image/upload/v1545589417/portfolio/icons/github.png',
      linkedInIcon: 'https://res.cloudinary.com/dpdwdstqt/image/upload/v1545589417/portfolio/icons/linkedin.svg'
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero {
  background-color: #fff;
  display: grid;
  // justify-content: center;
  // justify-items: center;
  grid-template-columns: 1fr 2fr;
  padding: .5rem 1.5rem;
}
.presentation {
  place-self: center;
  text-align: center;
  ul {
    li {
      // border: 1px solid #208AF7;
      margin: 0.3rem;
      // padding: .1rem;
      cursor: pointer;
      a {
        text-decoration: none;
        color: #000000;
      }
    }
  }
}
.img-hero {
  place-self: center;
  img {
    height: 180px;
  }
}
@media screen and (max-width: 840px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 0;
    .img-hero {
      img {
        height: 100px;
      }
    }
  }
  .presentation {
    padding: 1rem 15%;
  }
}
@media screen and (max-width: 540px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 0;
    .img-hero {
      img {
        height: 100px;
      }
    }
  }
  .presentation {
    padding: 1rem 5%;
  }
}
</style>
