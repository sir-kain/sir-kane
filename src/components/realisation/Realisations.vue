<template>
  <div class="realisations" id="realisations">
    <!-- grid section  -->
    <div class="projects">
      <div class="project" v-for="realisation in realisations" :key="realisation.id">
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
// import Realisation from "./Realisation";
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
          image: 'http://via.placeholder.com/150x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          id: 2,
          image: 'http://via.placeholder.com/150x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          id: 3,
          image: 'http://via.placeholder.com/150x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          id: 4,
          image: 'http://via.placeholder.com/150x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          id: 5,
          image: 'http://via.placeholder.com/150x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          id: 6,
          image: 'http://via.placeholder.com/150x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          id: 7,
          image: 'http://via.placeholder.com/150x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          id: 8,
          image: 'http://via.placeholder.com/150x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          id: 9,
          image: 'http://via.placeholder.com/150x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        }
      ]
    }
  }
  // components: {
  //   Realisation
  // }
  // directives: {
  //   data () {
  //     return this.realisations
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.realisations {
  .projects {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;
    grid-auto-flow: row dense;
    counter-reset: project;
    .project {
      counter-increment: project;
      cursor: pointer;
      .project__image {
        width: 100%;
        height: auto;
      }
      .project__body {
        display: none;
      }
      .project__title::after {
        content: counter(project);
      }
    }
  }
}
@media screen and (min-width: 840px) {
  .realisations {
    .projects {
      grid-template-columns: repeat(3, 1fr);
      .project__body {
        grid-column: span 3;
      }
    }
  }
}
@media screen and (min-width: 540px) and (max-width: 840px) {
  .realisations {
    .projects {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
