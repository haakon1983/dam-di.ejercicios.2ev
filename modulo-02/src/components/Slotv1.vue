<template>
    <div class="slotv1">
        

        <button @click="disparar">
            🔫 Disparar: {{ disparador }}
        </button>
        <ul>
            <li v-for="(evento, index) in debug" :key="index">
                {{ index }} - {{ evento }}
            </li>
        </ul>

        <div class="slot-vacio">
            <slot name="vacio">📥SLOT-VACIO-POR-DEFECTO</slot>
        </div>

        <div class="slot-cabecera">
            <slot name="cabecera"> ℹ️ CABECERA-POR-DEFECTO</slot>
        </div>
        

        <div class="slot-cuerpo">
            <slot> 📓 CUERPO-POR-DEFECTO</slot>
        </div>

        <div class="slot-pie">
            <slot name="pie"> PIE-POR DEFECTO</slot>
        </div>

        <div class="slot-debug">
            <slot name="debug"> 📥SLOT-DEBUG-POR-DEFECTO</slot>
        </div>

       

        
        

    </div>
</template>
<script setup>
import {ref, onMounted, onUnmounted, onBeforeUpdate}  from "vue";


//Variables reactivas.
const disparador= ref("disparar"); 
const debug = ref([]);

//función disparar.
const disparar = () => {
    disparador.value = Date.now().toString();
};

//hooks de vida.
onMounted(() => {
    debug.value.push("MSG: Slotv1.vue -> 🔥 (onMounted)");
});

onUnmounted(() => {
    debug.value.push("MSG: Slotv1.vue -> 🔥 (onUnmonunted)");
});

onBeforeUpdate(() => {
    debug.value.push("MSG: Slotv1.vue -> 🔥 (onBeforeUpdate)");
});</script>
<style scoped>
.slotv1 {
  max-width: 600px;
  margin: 20px auto;
  padding: 16px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.slot-cabecera,
.slot-cuerpo,
.slot-pie,
.slot-debug,
.slot-vacio {
  margin: 10px 0;
  padding: 10px;
  border: 1px dashed #aaa;
  border-radius: 4px;
  background-color: #fff;
  border-color: #007bff;
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
}</style>