import './styles/styles.css';

import router from './router'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import fetchArticleRoutes from "@/utils/fetchArticleRoutes";
import { createVCodeBlock } from '@wdns/vue-code-block';
import fetchSnippetRoutes from "@/utils/fetchSnippetRoutes";

const app = createApp(App)

fetchArticleRoutes(router);
fetchSnippetRoutes(router);

app.use(router);
app.use(createPinia());
app.use(createVCodeBlock({ prismjs: true, theme: 'solarizedlight', prismPlugin: true }));
app.mount('#app')

