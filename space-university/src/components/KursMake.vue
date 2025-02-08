<script setup>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { DatePicker } from "primevue";
import { FloatLabel } from "primevue";
import { ref } from "vue";
import kurse from '@/assets/data/kurse.js';


// Liste der Eingabefelder
const fields = ["Titel", "Beschreibung", "Dozierender", "Raum", "Tag", "Uhrzeit"];

// Zustand für den Ladebutton
const loading = ref(false);

// Reaktive Datenfelder
const formData = ref({
  Titel: "",
  Beschreibung: "",
  Dozierender: "",
  Raum: "",
  Tag: "",
  Uhrzeit: ""
});

const getFormattedTime = (date) => {
  if (!date) return "";
  return new Intl.DateTimeFormat("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(date);
};

// Funktion zum Speichern der Daten
const load = () => {
  loading.value = true;

  const out = {
    title: formData.value.Titel,
    description: formData.value.Beschreibung,
    lecturer: formData.value.Dozierender,
    room: formData.value.Raum,
    day: formData.value.Tag,
    time: getFormattedTime(formData.value.Uhrzeit)
  };

  kurse.value.push(out);  // Append new entry to the kurse array

  formData.value = {
    title: "",
    description: "",
    lecturer: "",
    room: "",
    day: "",
    time: ""
  }

  setTimeout(() => {
    loading.value = false;
    console.log("Kurse:", kurse); // Debug output
  }, 2000);
};
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-3">
    <div v-for="field in fields" :key="field">
      <FloatLabel variant="in">
        <div>
          <DatePicker v-if="field === 'Uhrzeit'" v-model="formData.Uhrzeit" timeOnly fluid />
          <InputText v-else v-model="formData[field]" type="text" />
        </div>
        <label>{{ field }}</label>
      </FloatLabel>
    </div>
    <div class="flex flex-col items-center justify-center gap-3">
      <Button class="my-10 char" type="button" label="Abschicken" icon="pi pi-sign-in"
              :loading="loading" @click="load" />
    </div>
  </div>
</template>

<style scoped>
.char {
  color: black;
}
</style>
