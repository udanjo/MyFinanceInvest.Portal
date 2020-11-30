<template>
  <div id="app">
     <SideBar />
    <!-- <div class="marginPrincipal">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="marginPrincipal">
      <router-view :key="$route.fullPath"></router-view>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Bank from "./components/Bank/Bank";
import SideBar from "./components/_menu/sideBar";

export default {
  name: "App",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Bank,
    SideBar,
  },
  }
</script>

<style lang="scss">
.marginPrincipal {
  width: 50%;
  margin: auto;
}

#app {
  margin-bottom: 5px;
}

html {
  height: 100%;
}

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
