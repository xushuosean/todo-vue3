import { createApp } from 'vue'
import App from './App.vue'
import rem from './config/rem'

createApp(App)
  .use(rem)
  .mount('#app')
