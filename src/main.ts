import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App as object);

app.use(pinia);
app.mount('#app');
