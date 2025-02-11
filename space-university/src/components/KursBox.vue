<script setup>
import Button from "primevue/button";
import {ref, watch} from "vue";

import ConfirmDialog from 'primevue/confirmdialog';
import {useConfirm} from "primevue/useconfirm";
import {useToast} from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

// Confirming Dialog

const showTemplate = () => {
  return new Promise((resolve, reject) => {
    confirm.require({
      group: 'templating',
      header: 'Confirmation',
      message: 'Please confirm to proceed moving forward.',
      icon: 'pi pi-exclamation-circle',
      rejectProps: {
        label: 'Cancel',
        icon: 'pi pi-times',
        outlined: true,
        size: 'small'
      },
      acceptProps: {
        label: 'Save',
        icon: 'pi pi-check',
        size: 'small'
      },
      accept: () => {
        toast.add({severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000});
        resolve(true);
      },
      reject: () => {
        toast.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000});
        reject(true);
      }
    });
  })
};

const props = defineProps({
  title: String,
  description: String,
  lecturer: String,
  room: String,
  day: String,
  time: String,
})

let signDict
let sign

if (!localStorage.getItem("sign")) {
  signDict = ref({})
  sign = ref(true)
} else {
  console.log("--------------------------------------------------")
  console.log(localStorage.getItem("sign"));
  signDict = ref(JSON.parse(localStorage.getItem("sign")))
  let title = props.title
  console.log(signDict.value[title])
  sign = ref(!signDict.value[title])
}

watch(signDict, (newSign) => {
  localStorage.setItem("sign", JSON.stringify(newSign));
}, {deep: true});

const loading = ref(false);

const load = async () => {
  console.log("Triggered load");

  try {
    await showTemplate();

    loading.value = true;
    const out = ref({
      title: sign.value,
    })

    signDict.value[props.title] = sign.value;
    sign.value = !sign.value;
    setTimeout(() => {
      loading.value = false;
    }, 2000);
  } catch (error) {
    console.log("Action was cancelled.");
  }
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
      <div v-if="sign">
        <Button type="button"
                label="Anmelden"
                icon="pi pi-pen-to-square"
                :loading="loading"
                @click="load"/>
      </div>
      <div v-else>
        <Button type="button"
                label="Abmelden"
                icon="pi pi-times-circle"
                :loading="loading"
                @click="load"/>
      </div>

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