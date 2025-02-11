<script setup>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import {DatePicker} from "primevue";
import {FloatLabel} from "primevue";
import {ref} from "vue";

// Liste der Eingabefelder
const fields = [
  "Vorname",
  "Nachname",
  "Geschlecht",
  "Geburtstag",
  "Straße",
  "Hausnummer",
  "Postleitzahl",
  "Ort",
  "Staat",
  "Planet",
  "E-Mail",
  "Lieblingsfarbe"
];

// Zustand für den Ladebutton
const loading = ref(false);

const load = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-3">
    <div class="grid grid-cols-2 gap-4">
      <div v-for="field in fields" :key="field">
        <FloatLabel variant="in">
          <div>
            <DatePicker v-if="field === 'Geburtstag'" id="in_label" v-model="date" dateFormat="dd/mm/yy"/>
            <InputText
                v-else
                id="in_label"
                type="text"
                class=""
            />
          </div>
          <label for="in_label" class="">{{ field }}</label>
        </FloatLabel>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-3">
      <Button
          class="my-10 char"
          type="button"
          label="Abschicken"
          icon="pi pi-sign-in"
          :loading="loading"
          @click="load"
      />
    </div>
  </div>
</template>

<style scoped>
.char {
  color: black;
}
</style>
