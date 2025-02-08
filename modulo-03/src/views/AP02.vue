<template>
    <div class="container">
      
      <h1>AP02: ROUTER</h1>
      <p>Navegación básica</p>
      <p>Usamos la vista con nombre en el router...</p>
      <nav>
        <router-link to="/AP02/v1" class="link-v1">VISTA-AP02-1</router-link> |
        <router-link to="/AP02/v2" class="link-v2">VISTA-AP02-2</router-link> |
        <router-link to="/AP02/v3" class="link-v3">VISTA-AP02-3</router-link> |
        <router-link to="/AP02/v4" class="link-v4">VISTA-AP02-4</router-link>
      </nav>
      <router-view class="content" />
    </div>
  </template>
  
  <script>
 
  
  export default {
    name: 'AP02',
    
  
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
  .content {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    }
   .link {
    display: inline-block;
    padding: 15px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 5px;
    transition: all 0.3s ease;
    flex-grow: 1;
    text-align: center;
    margin: 5px;
    }
</style>