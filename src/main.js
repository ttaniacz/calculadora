import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'

import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Panel from 'primevue/panel'



const app = createApp(App);

app.use(PrimeVue);

app.component('Dialog', Dialog);
app.component('Button', Button);
app.component('Card', Card);
app.component('Panel', Panel);

app.mount('#app')
