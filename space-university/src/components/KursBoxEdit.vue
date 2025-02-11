<script setup>
import Button from "primevue/button";
import {ref} from "vue";

const props = defineProps({
  title: String,
  description: String,
  lecturer: String,
  room: String,
  day: String,
  time: String,
})

const loading = ref(false);

const load = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>

<template>
  <div class="">
    <div class="intro-box" data-aos="fade-up"
         data-aos-delay="100">
      <h2 class="text-2xl">
        {{ title }}
      </h2>
      <hr>
      <ul>
        <li>Beschreibung: {{ description }}</li>
        <li>Dozierender: {{ lecturer }}</li>
        <li>Raum: {{ room }}</li>
        <li>Tag: {{ day }}</li>
        <li>Uhrzeit: {{ time }}</li>
      </ul>
      <Button type="button"
              label="Bearbeiten"
              icon="pi pi-pencil"
              :loading="loading"
              @click="load"/>
      <Button type="button"
              label="Löschen"
              icon="pi pi-trash"
              :loading="loading"
              @click="load"/>
    </div>
  </div>
</template>

<style scoped>
.intro-box {
  @apply flex flex-col items-center gap-4 border-2 rounded-md shadow-xl m-10 p-10;
  border-color: var(--p-contrast-2);
}

ul {
  list-style: none;
}
</style>