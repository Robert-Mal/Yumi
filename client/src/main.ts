import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Toast, { POSITION } from "vue-toastification";
import store from './store';
import "vue-toastification/dist/index.css";

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';

import router from './router';
import './index.css';

createApp(App).use(store).use(router).use(PrimeVue).use(Toast, {
    position: POSITION.BOTTOM_CENTER
}).mount('#app');

const app = createApp(App);
