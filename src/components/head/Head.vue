<template>
  <div class="head">
    <div class="menu">
      <a href="#" class="logo"> <span>SK</span> sir_kane </a>
      <ul>
        <li><a href="#">Compétences</a></li>
        <li><a href="#">Réalisations</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'Head',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.head {
  background-color: #fff;
  // display: grid;
  // justify-content: center;
  // justify-items: center;
  padding: 1rem 2rem;
  .menu {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-content: space-between;
    .logo {
      justify-self: start;
      span {
        padding: .5rem;
        border: 2px solid black;
      }
    }
    ul {
      justify-self: end;
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        display: inline-block;
        padding: auto .5rem;
        &:before {
          content: "/";
        }
        a {
          text-decoration: none;
        }
      }
    }
  }
}

@media screen and (max-width: 540px) {
  .head {
    .menu {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      grid-row-gap: 1rem;
      .logo {
        justify-self: center;
      }
      ul {
        justify-self: center;
      }
    }
  }
}

</style>
