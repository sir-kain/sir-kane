<template>
  <div class="realisations" id="realisations">
    <Separator title="Projects" @section-clicked="clickedSection"></Separator>
    <!-- grid section  -->
    <div class="projects" v-if="sectionStatus">
      <div class="project" @click.prevent="clickproject($event)" v-for="realisation in realisations" :key="realisation.id">
        <img :src="realisation.image" alt="logo" class="project__image">
        <h2 class="project__title"> {{ realisation.title }} </h2>
        <p class="project__libelle"> {{ realisation.libelle }} </p>
        <div class="project__body">
          <h2 class="project__body-title"> {{ realisation.body_title }} </h2>
          <p>
            {{ realisation.description }}
          </p>
          <a :href="realisation.link" target="_blank">Link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Separator from '../separator/Separator'
// eslint-disable-next-line
import ng5 from '../../assets/realisations/ng5.png'
export default {
  // name: 'Head',
  props: {
    msg: String
  },
  data () {
    return {
      realisations: [
        {
          id: 4545,
          image: 'https://res.cloudinary.com/dpdwdstqt/image/upload/v1580824158/portfolio/projects/vscmp.png',
          title: 'MediaPlayer for VsCoode',
          body_title: 'MediaPlayer for VsCode',
          libelle: 'Extension VsCode permettant de streamer du sons (Youtube, Podcast)',
          description: '',
          link: 'https://marketplace.visualstudio.com/items?itemName=sirkane.vscode-mediaplayer'
        },
        {
          id: 0,
          image: 'https://res.cloudinary.com/dpdwdstqt/image/upload/v1580823466/portfolio/projects/coinafrique.png',
          title: 'CoinAfrique',
          body_title: 'CoinAfrique',
          libelle: 'Site de mise en relation entre clients et vendeurs',
          description: '',
          link: 'https://web.coinafrique.com/'
        },
        {
          id: 1,
          image: 'https://res.cloudinary.com/dpdwdstqt/image/upload/v1525458858/portfolio/projects/logo.png',
          title: 'PGDE',
          body_title: 'PGDE',
          libelle: 'Plateforme de Gestion des Demandes d\'Emploi',
          description: '',
          link: 'https://emploi-fpublique.sec.gouv.sn/'
        },
        {
          id: 2,
          image: 'https://res.cloudinary.com/dpdwdstqt/image/upload/v1538313076/portfolio/projects/cmsfp.png',
          title: 'CMSFP',
          body_title: 'CMSFP',
          libelle: 'Centre Médico-Social de la Fonction Publique SN',
          link: ''
        },
        {
          id: 3,
          image: 'https://res.cloudinary.com/dpdwdstqt/image/upload/v1538259814/portfolio/projects/cg.png',
          title: 'Cellule Genre',
          body_title: 'Cellule Genre',
          libelle: 'Cellule Genre du Ministère de la Santé et de l\'Action Sociale du Sénégal',
          link: 'https://cellulegenre-sante.herokuapp.com/'
        },
        {
          id: 4,
          image: 'https://res.cloudinary.com/dpdwdstqt/image/upload/v1538259110/portfolio/projects/ng5.png',
          title: 'Discovering angular 5',
          body_title: 'Discovering angular 5',
          libelle: 'Little todoList app to learn angular 5.',
          description: 'Little todoList app to learn angular 5.',
          link: 'https://ng5experience.herokuapp.com/'
        },
        {
          id: 5,
          image: 'https://res.cloudinary.com/dpdwdstqt/image/upload/v1538260086/portfolio/projects/lsr.png',
          title: 'Les Specialistes en Réseaux (LSR)',
          body_title: 'LSR website',
          libelle: 'Les Specialistes en Réseaux (LSR)',
          description: 'WordPress website during my internship at LSR. I no longer manage his administration.',
          link: 'http://lsreseaux.com/'
        }
      ],
      sectionStatus: false
    }
  },
  components: {
    Separator
  },
  methods: {
    clickproject (event) {
      let projectbodyActive = Array.prototype.slice.call(document.querySelectorAll('.project__body-current'))
      projectbodyActive.map((item) => {
        item.remove()
      })
      let project = event.target.closest('.project')
      let projetbody = project.querySelector('.project__body').cloneNode(true)

      projetbody.classList.add('project__body-current')
      project.after(projetbody)
      // projetbody.style.backgroundColor = '#fff';
      window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: project.offsetTop
      })
    },
    clickedSection (value) {
      this.sectionStatus = value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./realisations.scss" lang="scss"></style>
