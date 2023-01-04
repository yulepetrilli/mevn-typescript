import { createApp } from 'vue';
import App from './App.vue';
import { router } from './routes';

import 'bootswatch/dist/sketchy/bootstrap.min.css';

createApp(App)
.use(router)
.mount('#app')
