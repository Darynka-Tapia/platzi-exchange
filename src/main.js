import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import Routes from "@/router/index.js";
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";

createApp(App).use(Routes).use(VueChartkick).mount("#app");

//createApp(App).mount("#app");
