<template>
  <div class="competences" id="competences">
    <!-- Libelle section -->
    <div class="section__title">
      <h2>Compétences</h2>
      <ul>
        <li><a href="#" @click.prevent="give('langages')">Langages & Frameworks</a></li>
        <li><a href="#" @click.prevent="give('outils')">Outils</a></li>
        <li><a href="#" @click.prevent="give('contributions')">Contributions</a></li>
      </ul>
    </div>
    <!-- grid section  -->
    <div class="line" v-if="langages">
      <div class="box v-span">
        <div class="competence">
          <img src="../../assets/competences/html5.png" alt="">
        <span>Html5</span>
        </div>
         <div class="competence">
          <img src="../../assets/competences/css.png" alt="">
        <span> CSS </span>
        </div>
      </div>

      <div class="box h-span">
         <div class="competence">
          <img src="../../assets/competences/php.png" alt="">
        <span>Php</span>
        </div>
         <div class="competence">
          <img src="../../assets/competences/symfony.png" alt="">
        <span>Symfony</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img src="../../assets/competences/wordpress.png" alt="">
        <span>Wordpress</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img src="../../assets/competences/laravel.png" alt="">
        <span>Laravel</span>
        </div>
      </div>

      <div class="box h-span">
         <div class="competence">
          <img src="../../assets/competences/js.png" alt="">
        <span>Javascript</span>
        </div>
        <div class="competence">
          <img src="../../assets/competences/vuejs.png" alt="">
        <span>Vue.js</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img src="../../assets/competences/angular.png" alt="">
        <span>Angular</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img src="../../assets/competences/java.png" alt="">
        <span>Java</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img src="../../assets/competences/python.png" alt="">
        <span>Python</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img src="../../assets/competences/django.png" alt="">
        <span>Django</span>
        </div>
      </div>
    </div>
    <div class="line" v-if="outils">
      <div class="box h-span">
         <div class="competence">
          <img src="../../assets/competences/php.png" alt="">
        <span>Php</span>
        </div>
         <div class="competence">
          <img src="../../assets/competences/symfony.png" alt="">
        <span>Symfony</span>
        </div>
      </div>

      <div class="box h-span">
         <div class="competence">
          <img src="../../assets/competences/js.png" alt="">
        <span>Javascript</span>
        </div>
        <div class="competence">
          <img src="../../assets/competences/vuejs.png" alt="">
        <span>Vue.js</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img src="../../assets/competences/java.png" alt="">
        <span>Java</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img src="../../assets/competences/python.png" alt="">
        <span>Python</span>
        </div>
      </div>

      <div class="box">
         <div class="competence">
          <img src="../../assets/competences/django.png" alt="">
        <span>Django</span>
        </div>
      </div>
    </div>
    <div class="line" v-if="contributions">
      <div class="box v-span">
        <div class="competence">
          <img src="../../assets/competences/html5.png" alt="">
        <span>Html5</span>
        </div>
         <div class="competence">
          <img src="../../assets/competences/css.png" alt="">
        <span> CSS </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  methods: {
    give (item) {
      if (item === 'langages') {
        // return {
        this.langages = true
        this.outils = false
        this.contributions = false
        // }
      } else if (item === 'outils') {
        // return {
        this.langages = false
        this.outils = true
        this.contributions = false
        // }
      } else {
        // return {
        this.langages = false
        this.outils = false
        this.contributions = true
        // }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./competences.scss" lang="scss"></style>
