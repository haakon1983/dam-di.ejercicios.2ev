<template>
    <div class="cabecera">
        <CabeceraEjercicio>
            EJERCICIO:03
            <template #descripcion>
                Uso de compionente con slots con información estática
            </template>
        </CabeceraEjercicio>
    </div>
    <div class="cajaDisparador"> 
        <button @click="disparar">
            🔫 Disparar: {{ disparador }}
        </button>
        <ul>
            <li v-for="(evento, index) in debug" :key="index">
                {{ index }} - {{ evento }}
            </li>
        </ul>
    </div>
    <Slotv1>
        <template #cabecera> Cabecera inyectada</template>
        <template #default>Cuerpo inyectado </template>
        <template #pie>Pie inyectado</template>
    </Slotv1>

</template>



<script setup>
import {ref, onMounted, onUnmounted, onBeforeUpdate}  from "vue";
import CabeceraEjercicio from "./CabeceraEjercicio.vue";
import Slotv1 from "./Slotv1.vue";

//Variables reactivas.
const disparador= ref("disparar"); 
const debug = ref([]);

//función disparar.
const disparar = () => {
    disparador.value = Date.now().toString();
};

//hooks de vida.
onMounted(() => {
    debug.value.push("MSG: EJ03.vue -> 🔥 (onMounted)");
});

onUnmounted(() => {
    debug.value.push("MSG: EJ03.vue -> 🔥 (onUnmonunted)");
});

onBeforeUpdate(() => {
    debug.value.push("MSG: EJ03.vue -> 🔥 (onBeforeUpdate)");
});
   

</script>

<style scoped>

.cajaDisparador {
  margin-top: 20px;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 display: flex;
 flex-direction: column;
}


.boton {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #28a745;
  color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
 
}

.boton:hover {
  background-color: #218838;
}


.debug-lista {
  list-style: none;
  margin: 20px 0 0 0;
  padding: 0;
}

.debug-lista li {
  font-size: 14px;
  margin: 5px 0;
  padding: 6px 10px;
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>