<template>
  <div class="competences" id="competences">
    <!-- Libelle section -->
    <Separator title="Skills" :link="true" @langages-clicked="clickedLangages" @section-clicked="clickedSection"></Separator>
    <!-- grid section  -->
    <div class="line" v-if="langages && sectionStatus">
      <div class="box v-span">
        <div class="competence">
          <img src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/html5.png" alt="">
        <span>Html5</span>
        </div>
         <div class="competence">
          <img src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/css.png" alt="">
        <span> CSS </span>
        </div>
      </div>

      <div class="box h-span">
         <div class="competence">
          <img src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/phplang.png" alt="">
        <span>Php</span>
        </div>
         <div class="competence">
          <img src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/symfony.png" alt="">
        <span>Symfony</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/wordpress.png" alt="">
        <span>Wordpress</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/laravel.png" alt="">
        <span>Laravel</span>
        </div>
      </div>

      <!-- <div class="box">
         <div class="competence">
          <img src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/java.png" alt="">
        <span>Java</span>
        </div>
      </div> -->

      <div class="box h-span v-span">
         <div class="competence">
          <img src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/js.png" alt="">
        <span>Javascript</span>
        </div>
        <div class="competence">
          <img src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/vuejs.png" alt="">
        <span>Vue.js</span>
        </div>
        <div class="competence">
          <img src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/angular.png" alt="">
          <span>Angular</span>
        </div>
        <div class="competence">
          <img src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1563917471/portfolio/competences/nodejs.svg" alt="">
          <span>Nodejs</span>
        </div>
      </div>

      <!-- <div class="box h-span">
        <div class="competence">
          <img src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/python.png" alt="">
          <span>Python</span>
        </div>
         <div class="competence">
          <img src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/django.png" alt="">
          <span>Django</span>
        </div>
      </div> -->
    </div>
    <div class="line" v-if="outils  && sectionStatus">

      <div class="box">
         <div class="competence">
          <img src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/tools/git.png" alt="">
        <span>Git</span>
        </div>
      </div>

      <div class="box h-span">
         <div class="competence">
          <img src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/tools/webpack.png" alt="">
        <span>Webpack</span>
        </div>
        <div class="competence">
          <img src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/tools/gulp.png" alt="">
        <span>Gulp</span>
        </div>
      </div>

      <div class="box h-span">
         <div class="competence">
          <img src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/tools/linux.png" alt="">
        <span>Linux</span>
        </div>
         <div class="competence">
          <img src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/tools/intellij.png" alt="">
        <span>Intellij</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/tools/docker.png" alt="">
        <span>Docker (virtualisation)</span>
        </div>
      </div>
    </div>
    <div class="line-v2" v-if="contributions  && sectionStatus">
      <div class="box-contribution">
        <div class="contribution">
          <img width="25px" src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/symfony.png" alt="Symfony icon">
          <a target="__blank" href="https://github.com/symfony/symfony/commits?author=sir-kain">symfony/symfony/commits?author=sir-kain</a>
        </div>
        <div class="contribution">
          <img width="25px" src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1540145019/sonataicon.png" alt="Sonata icon">
          <a target="__blank" href="https://github.com/sonata-project/SonataAdminBundle/commits?author=sir-kain">SonataAdminBundle/commits?author=sir-kain</a>
        </div>
      </div>
      <div class="box-contribution">
        <div class="contribution">
          <img width="25px" src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/symfony.png" alt="symfony icon">
          <a target="__blank" href="https://github.com/symfony/symfony-docs/commits?author=sir-kain">symfony/symfony-docs/commits?author=sir-kain</a>
        </div>
        <div class="contribution">
          <img width="25px" src="https://res.cloudinary.com/dpdwdstqt/image/upload/v1538256294/portfolio/competences/vuejs.png" alt="vuejs icon">
          <a target="__blank" href="https://github.com/vuejs-fr/vuejs.org/commits?author=sir-kain">vuejs-fr/vuejs.org/commits?author=sir-kain</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Separator from '../separator/Separator'
export default {
  // name: 'Head',
  props: {
    msg: String
  },
  data () {
    return {
      langages: true,
      outils: false,
      contributions: false,
      sectionStatus: false
    }
  },
  components: {
    Separator
  },
  methods: {
    clickedLangages (value) {
      if (value.langages) {
        this.langages = true
        this.outils = false
        this.contributions = false
        this.sectionStatus = true
      } else if (value.outils) {
        this.langages = false
        this.outils = true
        this.contributions = false
        this.sectionStatus = true
      } else if (value.contributions) {
        this.langages = false
        this.outils = false
        this.contributions = true
        this.sectionStatus = true
      }
    },
    clickedSection (value) {
      this.sectionStatus = value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./competences.scss" lang="scss"></style>
