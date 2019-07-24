<template>
  <div class="hero">
    <div class="img-hero">
      <img style="filter: grayscale(0)" src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538255702/sir_kane.jpg" alt="image sir_kane">
    </div>
    <div class="presentation">
      <div class="title">
        <h1>Web developer</h1>
        <img src="https://www.countryflags.io/sn/flat/24.png">
      </div>
      <p>
        Hello, I'm Ahmadou Waly Ndiaye. I'm a web developer working for <a href="https://sn.coinafrique.com" target="__blank">CoinAfrique</a> and I love the Web!
      </p>
      <p>
        You can also find me here:
      </p>
      <ul>
        <!-- <li @click="liRef()">
          <img :src="gmailIcon" alt="ahmadouwalyndiaye@gmail.com">
        </li> -->
        <!-- <li><a href="https://github.com/sir-kain" target="__blank" title="Github"><font-awesome-icon :icon="['fab', 'github']" /></a></li> -->
        <li @click="liRef('https://github.com/sir-kain')">
          <!-- <img :src="githubIcon" alt="sir-kain" title="Githug"> -->
          <font-awesome-icon :icon="['fab', 'github']" size="lg"/>
        </li>
        <!-- <li><a href="https://stackoverflow.com/users/8319507/sir-kane" target="__blank" title="Stackoverflow"><font-awesome-icon :icon="['fab', 'stack-overflow']" /></a></li> -->
        <!-- <li><a href="https://www.linkedin.com/in/ndiaye-ahmadou-waly-a61056ba/" target="__blank" title="Linkedin"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a></li> -->
        <li @click="liRef('https://www.linkedin.com/in/ndiaye-ahmadou-waly-a61056ba/')">
          <!-- <img :src="linkedInIcon" alt="LinkedIn" title="LinkedIn"> -->
          <font-awesome-icon :icon="['fab', 'linkedin-in']" size="lg"/>
        </li>
        <!-- <li><a href="https://twitter.com/_sir_kane" target="__blank" title="Twitter @_sir_kane"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li> -->
        <li @click="liRef('https://stackoverflow.com/users/8319507/sir-kane')">
          <!-- <img :src="stackOverflowIcon" alt="StackOverflow" title="StackOverflow"> -->
          <font-awesome-icon :icon="['fab', 'stack-overflow']" size="lg"/>
        </li>
        <li @click="liRef('https://twitter.com/_sir_kane')">
          <!-- <img :src="twitterIcon" alt="Twitter" title="Twitter"> -->
          <font-awesome-icon :icon="['fab', 'twitter']" size="lg"/>
        </li>
        <li @click="liRef('https://dev.to/sir_kane')">
          <!-- <img :src="devToIcon" alt="DEV.TO" title="DEV.TO"> -->
          <font-awesome-icon :icon="['fab', 'dev']" size="lg"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStackOverflow, faGithub, faLinkedinIn, faTwitter, faDev } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { VueRouter } from 'vue-router'

library.add(faStackOverflow, faGithub, faLinkedinIn, faTwitter, faDev)
// const router = new VueRouter()
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
      linkedInIcon: 'https://res.cloudinary.com/dpdwdstqt/image/upload/v1545589417/portfolio/icons/linkedin.svg',
      gmailIcon: 'https://res.cloudinary.com/dpdwdstqt/image/upload/v1545589417/portfolio/icons/gmail.svg',
      devToIcon: 'https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg'
    }
  },
  methods: {
    liRef (e) {
      window.open(e, '_blank')
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
  text-align: center;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      // display: inline-block;
      margin-left: 5px;
      filter: grayscale(0%);
    }
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      // border: 1px solid #208AF7;
      margin: .3rem .5rem;
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
