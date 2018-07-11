<template>
  <div class="competences" id="competences">
    <!-- Libelle section -->
    <Separator title="Compétences" :link="true" @langages-clicked="clickedLangages" @section-clicked="clickedSection"></Separator>
    <!-- grid section  -->
    <div class="line" v-if="langages && sectionStatus">
      <div class="box v-span">
        <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/html5.png" alt="">
        <span>Html5</span>
        </div>
         <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/css.png" alt="">
        <span> CSS </span>
        </div>
      </div>

      <div class="box h-span">
         <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/php.png" alt="">
        <span>Php</span>
        </div>
         <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/symfony.png" alt="">
        <span>Symfony</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/wordpress.png" alt="">
        <span>Wordpress</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/laravel.png" alt="">
        <span>Laravel</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/java.png" alt="">
        <span>Java</span>
        </div>
      </div>

      <div class="box h-span v-span">
         <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/js.png" alt="">
        <span>Javascript</span>
        </div>
        <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/vuejs.png" alt="">
        <span>Vue.js</span>
        </div>
        <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/angular.png" alt="">
          <span>Angular</span>
        </div>
        <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/angular.png" alt="">
          <span>React</span>
        </div>
      </div>

      <div class="box h-span">
      <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/python.png" alt="">
        <span>Python</span>
        </div>
         <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/django.png" alt="">
        <span>Django</span>
        </div>
      </div>
    </div>
    <div class="line" v-if="outils  && sectionStatus">
      <div class="box h-span">
         <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/tools/linux.png" alt="">
        <span>Linux</span>
        </div>
         <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/tools/intellij.png" alt="">
        <span>Intellij</span>
        </div>
      </div>

      <div class="box h-span">
         <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/tools/webpack.png" alt="">
        <span>Webpack</span>
        </div>
        <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/tools/gulp.png" alt="">
        <span>Gulp</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/tools/git.png" alt="">
        <span>Git</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/tools/docker.png" alt="">
        <span>Docker (virtualisation)</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/django.png" alt="">
        <span>Django</span>
        </div>
      </div>
    </div>
    <div class="line-v2" v-if="contributions  && sectionStatus">
      <div class="box-contribution">
        <div class="contribution">
          <img width="25px" src="../../assets/competences/symfony.png" alt="">
          <a href="https://github.com/symfony/symfony/pull/27836">https://github.com/symfony/symfony/pull/27836</a>
        </div>
        <div class="contribution">
          <img width="25px" src="../../assets/competences/symfony.png" alt="">
          <a href="https://github.com/symfony/symfony/pull/27836">https://github.com/symfony/symfony/pull/27836</a>
        </div>
        <div class="contribution">
          <img width="25px" src="../../assets/competences/vuejs.png" alt="">
          <a href="https://github.com/symfony/symfony/pull/27836">https://github.com/symfony/symfony/pull/27836</a>
        </div>
      </div>
      <div class="box-contribution">
        <div class="contribution">
          <img width="25px" src="../../assets/competences/symfony.png" alt="">
          <a href="https://github.com/symfony/symfony/pull/27836">https://github.com/symfony/symfony/pull/27836</a>
        </div>
        <div class="contribution">
          <img width="25px" src="../../assets/competences/symfony.png" alt="">
          <a href="https://github.com/symfony/symfony/pull/27836">https://github.com/symfony/symfony/pull/27836</a>
        </div>
        <div class="contribution">
          <img width="25px" src="../../assets/competences/vuejs.png" alt="">
          <a href="https://github.com/symfony/symfony/pull/27836">https://github.com/symfony/symfony/pull/27836</a>
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
      if (value.langages === true) {
        this.langages = true
        this.outils = false
        this.contributions = false
      } else if (value.outils === true) {
        this.langages = false
        this.outils = true
        this.contributions = false
      } else if (value.contributions === true) {
        this.langages = false
        this.outils = false
        this.contributions = true
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
