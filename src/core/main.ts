import "@/core/assets/css/main.css";
import store from "@/core/store";
import router from "@/core/router";
import App from "@/core/App.vue";
import { createApp } from "vue";
import { globalProperties } from "@/core/global";

const app = createApp(App);

Object.entries(globalProperties).forEach(([key, value]) => {
  app.config.globalProperties[key] = value;
});

app.use(store).use(router);
app.mount("#app");
