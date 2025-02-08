<template>
    <div class="container">
      
      <h1>AP03: ROUTER</h1>
      <p>Navegación por código</p>
      <p>Nevegación usando el router directamente.</p>
      <nav>
        <router-link to="{ name: 'AP03v1'}" class="link-v1">VISTA-AP03-1</router-link> |
        <router-link to="{ name: 'AP03v2'}" class="link-v2">VISTA-AP03-2</router-link> |
        <router-link to="{ name: 'AP03v3'}" class="link-v3">VISTA-AP03-3</router-link> |
        <router-link to="{ name: 'AP03v4'}" class="link-v4">VISTA-AP03-4</router-link>
      </nav>
      <button @click="toggleAutoNavigation">
      {{ buttonText }}
    </button>
      <router-view class="content" />
    </div>
  </template>
  
  <script>
  
  
  export default {
    name: 'AP03',
    //Función para navegar automáticamente entre las vistas con temporizador de 2s. El botón debe mostrar la información de la vista que se muestra en ese momento.
    //Tras hacer click en el botón, se deteniene la navegación automática y el botón debe mostrar la información de la vista que se muestra en ese momento y añadir el texto"(detenid)""
    data() {
      return {
        routes: ['/AP03/v1', '/AP03/v2', '/AP03/v3', '/AP03/v4'],
      currentIndex: 0,
      timer: null,
      autoNavigating: false,
      }
    },
    computed: {
      currentRouteName() {
        return this.$route.name
      },
    },
    computed: {
      buttonText() {
        return this.autoNavigating
        ? `VUE-PILOT: iniciar... `
        : `VUE-PILOT: ${this.currentRouteName}(detenido)`
      },
    },
    methods: {
      toggleAutoNavigation() {
        this.autoNavigating = !this.autoNavigating
        if (this.autoNavigating) {
          this.autoNavigate()
        } else {
          clearInterval(this.timer)
        }
      },
      autoNavigate() {
        this.timer = setInterval(() => {
          this.currentIndex = (this.currentIndex + 1) % this.routes.length
          this.$router.push(this.routes[this.currentIndex])
        }, 2000)
      },
      stopAutoNavigation() {
        clearInterval(this.timer);
        this.timer = null;
      },
    },
    beforeUnmount() {
      this.stopAutoNavigation();
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