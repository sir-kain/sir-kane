<template>
    <div id="separator" class="separator">
      <div class="separator__title" @click="togglesection()">
        <font-awesome-icon size="xs" :icon="sectionStatus ? 'chevron-down' : 'chevron-right'" />
        <h2>{{ title }}</h2>
      </div>
      <ul class="separator__menu-s" v-if="link">
        <li>
          <a href="#" @click.prevent.stop="showItem('langages')">
            <font-awesome-icon icon="code" />
            <span>Langages & Frameworks</span>
          </a>
        </li>
        <li>
          <a href="#" @click.prevent.stop="showItem('outils')">
            <font-awesome-icon icon="wrench" />
            <span>Tools</span>
          </a>
        </li>
        <li>
          <a href="#" @click.prevent.stop="showItem('contributions')">
            <font-awesome-icon icon="code-branch" />
            <span>Contributions</span>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faChevronRight, faCode, faWrench, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronDown, faChevronRight, faCode, faWrench, faCodeBranch)

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
      },
      sectionStatus: false
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
        this.sectionStatus = true
        this.$emit('langages-clicked', this.selectedCompetenceType)
      } else if (item === 'outils') {
        this.selectedCompetenceType = {
          langages: false,
          outils: true,
          contributions: false
        }
        this.sectionStatus = true
        this.$emit('langages-clicked', this.selectedCompetenceType)
      } else {
        this.selectedCompetenceType = {
          langages: false,
          outils: false,
          contributions: true
        }
        this.sectionStatus = true
        this.$emit('langages-clicked', this.selectedCompetenceType)
      }
    },
    togglesection () {
      this.sectionStatus = !this.sectionStatus
      this.$emit('section-clicked', this.sectionStatus)
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./separator.scss" lang="scss"></style>
