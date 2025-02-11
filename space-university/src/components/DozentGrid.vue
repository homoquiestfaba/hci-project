<template>
  <div class="grid grid-cols-2 gap-8 mt-10">
    <RouterLink to="kursedit">
      <Box title="Kurse verwalten" click></Box>
    </RouterLink>
    <RouterLink to="kursmake">
      <Box title="Kurs erstellen" click></Box>
    </RouterLink>
  </div>
</template>

<style scoped>
</style>

<script setup>
import Box from "@/components/Box.vue";
</script>