<script setup>
import { ref } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";


// Wochentage
const days = ref(["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"]);

// Stundenplan-Daten
const schedule = ref([
  {
    time: "08:00 - 09:00",
    montag: "Mathematik",
    dienstag: "Englisch",
    mittwoch: "",
    donnerstag: "Biologie",
    freitag: "Physik",
  },
  {
    time: "09:00 - 10:00",
    montag: "Deutsch",
    dienstag: "",
    mittwoch: "Chemie",
    donnerstag: "Geschichte",
    freitag: "Sport",
  },
  {
    time: "10:00 - 11:00",
    montag: "",
    dienstag: "Geografie",
    mittwoch: "Mathematik",
    donnerstag: "",
    freitag: "Englisch",
  },
  {
    time: "11:00 - 12:00",
    montag: "Physik",
    dienstag: "",
    mittwoch: "Deutsch",
    donnerstag: "Englisch",
    freitag: "Biologie",
  },
]);
</script>

<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4 text-center">Stundenplan</h1>
    <DataTable :value="schedule" class="shadow-md">
      <!-- Zeit-Spalte -->
      <Column field="time" header="Zeit" class="text-center"></Column>

      <!-- Dynamische Spalten für jeden Wochentag -->
      <Column
          v-for="day in days"
          :key="day"
          :field="day.toLowerCase()"
          :header="day"
          class="text-center"
      >
        <!-- Custom Cell Template -->
        <template #body="slotProps">
          <div
              class="bg-blue-100 text-blue-700 rounded p-1 text-sm font-medium"
          >
            {{ slotProps.data[slotProps.field] || "---" }}
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style scoped>

</style>