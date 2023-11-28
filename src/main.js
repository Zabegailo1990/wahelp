import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import './assets/globalStyles/main.scss';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount('#app');
