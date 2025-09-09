import "@/assets/css/main.css";
import store from "@/store";
import router from "@/router";
import App from "@/App.vue";
import { createApp } from "vue";
import { globalProperties } from "./global";

const app = createApp(App);

Object.entries(globalProperties).forEach(([key, value]) => {
  app.config.globalProperties[key] = value;
});

app.use(store).use(router);
app.mount("#app");
