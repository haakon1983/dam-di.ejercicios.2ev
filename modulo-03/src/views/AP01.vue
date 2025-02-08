<template>
    <div class="container">
      
      <h1>AP01: ROUTER</h1>
      <p>Navegación básica</p>
      <p>Usamos la vista por defecto del router...</p>
      <nav>
        <router-link to="/AP02/v1" class="link-v1">Vista 1</router-link> |
        <router-link to="/AP03/v1" class="link-v2">Vista 2</router-link> |
        <router-link to="/AP01/v3" class="link-v3">Vista 3</router-link> |
        <router-link to="/AP01/v4" class="link-v4">Vista 4</router-link>
      </nav>
      <router-view />
    </div>
  </template>
  
  <script>
 
  
  export default {
    name: 'AP01',
    components: {
      
    },
  }
  </script>

  <style scoped>
  .container {
  width: 90%;
  margin: 0 auto;
  }
  nav {
    margin-bottom: 20px;
  }
  .link-v1 {
    color: blue;
    margin-right: 10px;
  }
  .link-v2 {
    color: green;
    margin-right: 10px;
  }
  .link-v3 {
    color: red;
    margin-right: 10px;
  }
  .link-v4 {
    color: goldenrod;
    margin-right: 10px;
  }
</style>
  