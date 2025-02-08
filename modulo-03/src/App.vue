<template>
  <div id="app">
    <div class="container">
      <CabeceraEjercicio>
        MODULO-03: ROUTER 
       </CabeceraEjercicio>
      <div class="modulo">
        </div>
        <router-view />
    </div>
  </div>
</template>

<script>  
import CabeceraEjercicio from '@/components/CabeceraEjercicio.vue'
export default {
  name: 'App',
  components: {
    CabeceraEjercicio,
  },
} 

</script>


<style scoped>

.main-link {
  margin: 0 10px;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
}

</style>
