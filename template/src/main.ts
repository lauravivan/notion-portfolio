import { createApp } from "vue";
import "notion-portfolio/dist/notion-portfolio.css";
// import router from "./router";
import App from "./App.vue";

const app = createApp(App);

// // Object.entries(globalProperties).forEach(([key, value]) => {
// //   app.config.globalProperties[key] = value;
// // });

// app.use(router);
app.mount("#app");
