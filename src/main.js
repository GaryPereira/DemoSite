import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from "primevue/button";
import Ripple from "primevue/ripple";

const app = createApp(App);

app.use(PrimeVue, {
    ripple: true,
    theme: {
        preset: Aura
    }
});

app.directive('ripple',Ripple);

app.component('Button', Button);

app.mount('#app');

