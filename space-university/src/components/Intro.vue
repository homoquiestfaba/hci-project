<script setup>
import HomeGrid from "@/components/HomeGrid.vue";
</script>

<template xmlns="http://www.w3.org/1999/html">
  <div class="flex flex-col items-center gap-4 mx-20">
    <div class="flex flex-col items-center gap-4 mx-20 p-10 border border-2 border-orange-700 rounded-md shadow-xl" data-aos="fade-down" data-aos-delay="100">
      <h1 class="text-3xl">
        Willkommen im Kursanmeldungssystem der Space University
      </h1>
      <div class="flex flex-col items-center gap-4">
        <p class="text-justify">
          Tauchen Sie ein in die Zukunft des Lernens! An der Space University, einer Institution, die Wissen über die
          Sterne
          hinaus erweitert, bieten wir Ihnen ein Kursanmeldungssystem, das so fortschrittlich ist wie die Galaxien, die
          wir
          erforschen. Dieses Portal ist Ihre zentrale Anlaufstelle, um sich in eine Vielzahl von Kursen einzuschreiben,
          die
          darauf abzielen, die Grenzen des Verstandes und der Technologie zu erweitern.
        </p>
      </div>
    </div>
    <HomeGrid/>
  </div>
</template>

<script>

</script>
