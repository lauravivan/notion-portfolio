import "@/assets/css/main.css";
import store from "store";
import router from "@/router/router.js";
import App from "@/App.vue";
import { createApp } from "vue";
import { globalProperties } from "global";

const app = createApp(App);

app.config.globalProperties.globalProperties = globalProperties;

app.use(router).use(store);

app.mount("#app");
