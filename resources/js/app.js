import './bootstrap';

import { createApp } from 'vue' 
import HomeIndex from './components/Home/Index.vue' 
 
createApp({}) 
    .component('HomeIndex', HomeIndex)
    .mount('#app') 
