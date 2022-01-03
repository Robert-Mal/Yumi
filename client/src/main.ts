import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import store from './store';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';

import router from './router';
import './index.css';

createApp(App).use(store).use(router).use(PrimeVue).mount('#app');

const app = createApp(App);
