import "@/assets/css/main.css";
import store from "@/store";
import router from "@/router";
import App from "@/App.vue";
import { createApp } from "vue";

const app = createApp(App);
app.use(store).use(router);
app.mount("#app");
