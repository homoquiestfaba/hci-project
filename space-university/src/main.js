import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';


AOS.init({once: true})


const app = createApp(App)

app.use(router).use(PrimeVue, {
    theme: 'none'
}).use(ConfirmationService).use(ToastService)

app.mount('#app')
