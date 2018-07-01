<template>
    <div id="separator" class="separator">
      <h2>{{ title }}</h2>
      <ul v-if="link">
        <li><a href="#" @click.prevent="showItem('langages')">Langages & Frameworks</a></li>
        <li><a href="#" @click.prevent="showItem('outils')">Outils</a></li>
        <li><a href="#" @click.prevent="showItem('contributions')">Contributions</a></li>
      </ul>
    </div>
</template>

<script>
export default {
  // name: 'Head',
  props: {
    msg: String,
    title: String,
    link: Boolean
  },
  data () {
    return {
      selectedCompetenceType: {
        langages: true,
        outils: false,
        contributions: false
      }
    }
  },
  methods: {
    showItem (item) {
      if (item === 'langages') {
        this.selectedCompetenceType = {
          langages: true,
          outils: false,
          contributions: false
        }
        this.$emit('langages-clicked', this.selectedCompetenceType)
      } else if (item === 'outils') {
        this.selectedCompetenceType = {
          langages: false,
          outils: true,
          contributions: false
        }
        this.$emit('langages-clicked', this.selectedCompetenceType)
      } else {
        this.selectedCompetenceType = {
          langages: false,
          outils: false,
          contributions: true
        }
        this.$emit('langages-clicked', this.selectedCompetenceType)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./separator.scss" lang="scss"></style>
