<template>
  <div class="aboutPochta">
    <v-container>
      <v-card width="50%" class="my-4">
        <v-card-title>Vue Pochta</v-card-title>

        <v-card-text>
          Vue Pochta is a student project to learn programming with frontend
          framework in web browser. It uses an analogy to Porta of University of
          Trier.
        </v-card-text>
      </v-card>

      <v-card width="50%" class="my-4">
        <a
          href="https://porta-system.uni-trier.de/qisserver/pages/cs/sys/portal/hisinoneStartPage.faces?chco=y"
          target="_blank"
        >
          <v-img src="@/assets/img/porta.png"></v-img>
        </a>

        <v-card-title>Porta</v-card-title>

        <v-card-text>
          Porta is an integrated campus-management system of University of
          Trier.
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'AboutPochta',
};
</script>
