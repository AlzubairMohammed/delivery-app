
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
 import 'bootstrap/dist/js/bootstrap';
import Toaster from "@meforma/vue-toaster";
 

createApp(App).use(store).use(router).mount("#app");
createApp(App).use(Toaster);
