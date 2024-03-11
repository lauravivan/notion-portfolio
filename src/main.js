import "@/assets/css/main.css";
import store from "store";
import router from "@/router/router.js";
import App from "@/App.vue";
import { createApp } from "vue";
import { globalState } from "@/globalState.js";

const app = createApp(App);

app.use(router).use(store);

app.config.globalProperties.globalState = globalState;

app.mount("#app");
