<template>
    <header class="cabecera-ejercicio">
      <h1 class="titulo-ejercicio">
        <slot>
          Título del Ejercicio
        </slot>
      </h1>
      <p class="descripcion-ejercicio">
        <slot name="descripcion">
          🔶 Incluye una descripcion por favor. 🔶
        </slot>
      </p>
    </header>
  </template>
  
  <script>
  export default {
    name: 'CabeceraEjercicio',
  }
  </script>
  
  <style scoped>
  .cabecera-ejercicio {
    background-color: #f5f5f5;
    padding: 20px;
    border-bottom: 2px solid #ddd;
    text-align: center;
    border-radius: 10px;
    
  }
  
  .titulo-ejercicio {
    font-size: 2em;
    margin: 0;
    color: #333;
  }
  
  .descripcion-ejercicio {
    font-size: 1.2em;
    color: #666;
    margin-top: 10px;
  }
  </style>
  