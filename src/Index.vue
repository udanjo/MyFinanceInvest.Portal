<template>
  <div id="index">
    <SideBar />
    <div class="marginPrincipal">
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
import Bank from "./components/Bank/Bank";
import SideBar from "./components/_menu/sideBar";

export default {
  name: "Index",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Bank,
    SideBar,
  },
  }
</script>

<style>
.marginPrincipal {
  width: 50%;
  margin: auto;
}

#index {
  margin-bottom: 5px;
}

html {
  height: 100%;
}
</style>