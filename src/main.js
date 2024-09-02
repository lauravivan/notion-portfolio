import "@/assets/css/main.css";
import store from "store";
import router from "router";
import App from "@/App.vue";
import { createApp } from "vue";
import { globalProperties } from "global";

const app = createApp(App);

app.config.globalProperties.globalProperties = globalProperties;

app.use(store).use(router);

app.mount("#app");
