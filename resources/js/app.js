import './bootstrap';

import { createApp } from 'vue' 
import HomeIndex from './components/Home/index.vue' 
import HomeNavComponent from './components/Home/layouts/NavbarComponent.vue' 
 
createApp({}) 
    .component('HomeIndex', HomeIndex)
    .component('HomeNavComponent', HomeNavComponent)
    .mount('#app') 
