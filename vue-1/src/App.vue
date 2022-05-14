<template>
  <nav>
    <router-link to="/">Home</router-link> |

    <div>
      영상1:
      <router-link to="/test1">test1</router-link> /
      <router-link to="/test1com">comp</router-link> /
      <router-link to="/test1setup">setup</router-link> /
      <router-link to="/test1setup2">setup2</router-link>
    </div>
  </nav>
  <router-view />
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
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
