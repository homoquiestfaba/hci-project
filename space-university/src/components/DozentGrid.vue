<template>
  <div class="grid grid-cols-2 gap-8 mt-10">
    <Box title="Kurse verwalten"></Box>
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