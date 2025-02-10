<script setup>
const props = defineProps({
  title: String,
  description: String,
  lecturer: String,
  room: String,
  day: String,
  time: String,
})
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
    </div>
  </div>
</template>

<style scoped>
.intro-box {
  @apply flex flex-col items-center gap-4 border-2 rounded-md shadow-xl m-10 p-10;
  border-color: var(--p-contrast-2);
}

ul{
  list-style: none;
}
</style>