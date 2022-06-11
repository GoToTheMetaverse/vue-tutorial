<template>
  <nav>
    <div>
      ref 사용에 대한
      <a href="https://www.youtube.com/watch?v=hg5fYPwzyQs" target="_blank"
        >영상</a
      >
      : <router-link to="/test1">test1</router-link> /
      <router-link to="/test1com">comp</router-link> /
      <router-link to="/test1setup">setup</router-link> /
      <router-link to="/test1setup2">setup2</router-link>
    </div>
    <div>motion one : <router-link to="/motion_demo">demo</router-link> /</div>
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
