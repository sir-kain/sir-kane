<template>
  <div class="realisations" id="realisations">
    <Separator title="Réalsations"></Separator>
    <!-- grid section  -->
    <div class="projects">
      <div class="project" @click.prevent="clickproject($event)" v-for="realisation in realisations" :key="realisation.id">
        <img :src="realisation.image" alt="" class="project__image">
        <h2 class="project__title"> {{ realisation.title }} </h2>
        <p class="project__libelle"> {{ realisation.libelle }} </p>
        <div class="project__body">
          <h2 class="project__body-title">Lorem impsut</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sapiente nam modi recusandae corporis eligendi repellendus provident. Eius ducimus sapiente nisi, nesciunt aspernatur est natus veritatis quos odio numquam animi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis impedit quas voluptatem odio sed dolorem deleniti nisi vero dicta quod at nam ratione, obcaecati aperiam nemo architecto harum iusto! Doloremque.
          </p>
          <a href="#">En savoir plus</a>
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
      realisations: [
        {
          id: 1,
          image: 'http://via.placeholder.com/140x100',
          title: 'PGDE',
          libelle: 'Plateforme de Gestion des Demandes d\'Emploi'
        },
        {
          id: 2,
          image: 'http://via.placeholder.com/140x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          id: 3,
          image: 'http://via.placeholder.com/140x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          id: 4,
          image: 'http://via.placeholder.com/140x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          id: 5,
          image: 'http://via.placeholder.com/140x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          id: 6,
          image: 'http://via.placeholder.com/140x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          id: 7,
          image: 'http://via.placeholder.com/140x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          id: 8,
          image: 'http://via.placeholder.com/140x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          id: 9,
          image: 'http://via.placeholder.com/140x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        }
      ]
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./realisations.scss" lang="scss"></style>
