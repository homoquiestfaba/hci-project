<script setup>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { DatePicker } from "primevue";
import { FloatLabel } from "primevue";
import { ref, onMounted, watch } from "vue";

// Try to load existing courses from localStorage
const kurse = ref(JSON.parse(localStorage.getItem("courses")));

// List of input fields
const fields = ["Titel", "Beschreibung", "Dozierender", "Raum", "Tag", "Uhrzeit"];

// Reactive form data
const formData = ref({
  Titel: "",
  Beschreibung: "",
  Dozierender: "",
  Raum: "",
  Tag: "",
  Uhrzeit: null // Stores raw Date object
});

// Extract time in HH:mm format
const getFormattedTime = (date) => {
  if (!date) return "";
  return new Intl.DateTimeFormat("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(date);
};

// Save to Local Storage whenever `kurse` changes
watch(kurse, (newKurse) => {
  localStorage.setItem("courses", JSON.stringify(newKurse));
}, { deep: true });

// Function to save data
const load = () => {
  if (!formData.value.Uhrzeit) {
    alert("Bitte eine Uhrzeit auswählen!");
    return;
  }

  const out = {
    title: formData.value.Titel,
    description: formData.value.Beschreibung,
    lecturer: formData.value.Dozierender,
    room: formData.value.Raum,
    day: formData.value.Tag,
    time: getFormattedTime(formData.value.Uhrzeit) // Store only time
  };

  kurse.value.push(out); // Add new course

  // Reset form after submission
  formData.value = {
    Titel: "",
    Beschreibung: "",
    Dozierender: "",
    Raum: "",
    Tag: "",
    Uhrzeit: null
  };
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
      <Button class="my-10 char" type="button" label="Erstellen" icon="pi pi-upload" @click="load" />
    </div>
  </div>
</template>

<style scoped>
.char {
  color: black;
}
</style>
