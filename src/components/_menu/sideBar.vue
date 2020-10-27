<template>
  <div>
    <nav class="sidebar-panel-nav">
      <router-link to="/bank">Banco</router-link><br />
      <router-link to="/Account">Conta Corrente</router-link><br />
      <router-link to="/about">Pessoa</router-link><br />
      <router-link to="/about">Sobre</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.sidebar-panel-nav {
  list-style-type: none;
}

.sidebar-panel-nav {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  position: fixed;
  padding-bottom: 0.5em;
  width: 20vw;
  height: 100vh;
  background: #1c4a2b;
}

.sidebar-panel-nav > a {
  padding: 10px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.8em;
  color: White;
}

.sidebar-panel-nav > .router-link-active {
  color: FF5858;
  text-decoration: none;
}
</style>
