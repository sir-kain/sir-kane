<template>
  <div class="head">
    <div class="menu">
      <a href="#" class="logo"> <span>SK</span> _sir_kane </a>
      <ul>
        <li class="mr"><a href="#competences">Skills</a></li>
        <li class="mr"><a href="#realisations">Projects</a></li>
        <li class="mr"><a href="#">Blog</a></li>
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
      color: #000;
      font-family: 'Pacifico', cursive;
      span {
        padding: .35rem;
        border: 2px solid #208AF7;
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
        padding-bottom: 0.5rem;
        transition: all .2s ease-in-out;
        box-sizing: border-box;
        border-bottom: 2px solid #fff;
        // &:before {
        //   content: "/";
        // }
        &.mr {
          margin-right: .9rem;
        }
        &:hover {
          border-bottom: 2px solid #000;
          a {
            text-decoration: none;
            color: #000;
            font-weight: 600;
          }
        }
        a {
          text-decoration: none;
          color: #2c3e50;
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
