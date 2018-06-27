<template>
  <div>
  </div>
</template>

<script>
export default {
  // name: 'Head',
  props: {
    msg: String
  },
  data() {
    return {
      realisations: [
        {
          image: 'http://via.placeholder.com/50x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          image: 'http://via.placeholder.com/150x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          image: 'http://via.placeholder.com/150x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          image: 'http://via.placeholder.com/150x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          image: 'http://via.placeholder.com/150x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          image: 'http://via.placeholder.com/150x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          image: 'http://via.placeholder.com/150x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          image: 'http://via.placeholder.com/150x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          image: 'http://via.placeholder.com/150x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          image: 'http://via.placeholder.com/150x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        },
        {
          image: 'http://via.placeholder.com/150x100',
          title: 'Lorem impsut',
          libelle: 'Excepturi quis repellendus'
        }
      ]
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
@media screen and (min-width: 840px) {
  .project {
    .project__body {
      grid-column: span 3;
    }
  }
}
@media screen and (min-width: 540px) and (max-width: 840px) {
}
</style>
