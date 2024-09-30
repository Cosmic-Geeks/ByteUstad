import './styles/styles.css'

import router from './router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import fetchArticleRoutes from "@/utils/fetchArticleRoutes";

const app = createApp(App)

fetchArticleRoutes(router);

app.use(router);
app.use(createPinia());

app.mount('#app')

