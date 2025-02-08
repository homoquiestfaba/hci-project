<template>
  <div class="grid grid-cols-2 gap-8 mt-10">
    <RouterLink to="kurssign">
      <Box title="Kurse" click />
    </RouterLink>
    <RouterLink to="/stundenplan">
      <Box title="Stundenplan" click />
    </RouterLink>
  </div>
</template>

<style scoped>
</style>

<script setup>
import Box from "@/components/Box.vue";
</script>