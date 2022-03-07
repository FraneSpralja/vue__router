<template>
  <nav>
    <div class="menu__block">
    <router-link to="/">Inicio</router-link> |
    <router-link to="/sobremi">Sobre Mí</router-link> |
    <router-link to="/contacto">Contacto</router-link> |
    <router-link to="/post/:id">Último Articulo</router-link> |
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  width: 100%;
  padding: 30px;
  background-color: #2c3e50;
}

.menu__block{
  width: fit-content;
  margin-left: auto;
}

nav a {
  font-weight: bold;
  color: #fff;
  padding-left: 2em;
  padding-right: 2em;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
