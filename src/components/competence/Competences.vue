<template>
  <div class="competences" id="competences">
    <!-- Libelle section -->
    <Separator title="Compétences" :link="true" @langages-clicked="clickedLangages"></Separator>
    <!-- grid section  -->
    <div class="line" v-if="langages">
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
    <div class="line" v-if="outils">
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

      <div class="box h-span">
         <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/js.png" alt="">
        <span>Javascript</span>
        </div>
        <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/vuejs.png" alt="">
        <span>Vue.js</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/java.png" alt="">
        <span>Java</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/python.png" alt="">
        <span>Python</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img height="90px" width="100px" src="../../assets/competences/django.png" alt="">
        <span>Django</span>
        </div>
      </div>
    </div>
    <div class="line" v-if="contributions">
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
      contributions: false
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./competences.scss" lang="scss"></style>
