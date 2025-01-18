<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div data-aos="fade-down" data-aos-duration="5000" class="bg-indigo-800 shadow-2xl flex justify-around items-center">
      <div class="text-stone-50 flex flex-row items-center gap-3">
        <img alt="Vue logo" class="rounded-full" src="@/assets/gate.jpg" width="100" height="100" />
        <h1 class="text-3xl tracking-wide">Tannhäuser Gate</h1>
      </div>
      <div class="card !bg-stone-50 !rounded-md">
        <Menubar :model="items">
          <template #item="{ item, props, hasSubmenu }">
            <div class="!bg-stone-50">
              <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                  <span :class="item.icon" />
                  <span>{{ item.label }}</span>
                </a>
              </RouterLink>
              <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                <span :class="item.icon" />
                <span>{{ item.label }}</span>
                <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
              </a>
            </div>
          </template>
        </Menubar>
      </div>
      <div class="flex flex-row gap-7">
        <div class="flex flex-col gap-3 justify-center">
          <div class="flex flex-col gap-1">
            <InputText v-model="user" name="username" type="text" placeholder="Username"
              class="bg-white rounded-md py-0.5" />
          </div>
          <div class="flex flex-col gap-1">
            <InputText v-model="pass" name="password" type="password" placeholder="Passwort"
              class="bg-white rounded-md py-0.5" />
          </div>
        </div>
        <div class="card flex justify-center">
          <Button class="bg-yellow-400 hover:!bg-yellow-500 my-10" type="button" label="Einloggen" icon="pi pi-sign-in"
            :loading="loading" @click="load" />
        </div>
      </div>
    </div>
  </header>

  <div class="pb-14"></div>

  <RouterView data-aos="fade-down" data-aos-duration="4000" />
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Password from 'primevue/password';
import Menubar from 'primevue/menubar'
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/'
  },
  {
    label: 'Rolle',
    icon: 'pi pi-user',
    items: [
      {
        label: 'Studierende',
        route: 'about'
      },
      {
        label: 'Dozierende',
        route: 'about'
      }
    ]
  },
  {
    label: 'Campus',
    icon: 'pi pi-map',
    route: 'campus'
  }
]);

const loading = ref(false);
const user = ref('')
const pass = ref('')

const load = () => {
  user.value = '';
  pass.value = '';
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

</script>

<style scoped>
/*
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}*/
.custom-round {
  @apply rounded-full border-none
}
</style>
