import Vue, { createApp } from "vue";
import App from "./App.vue";

Vue.config.ignoredElements = [/^ion-/];

createApp(App).mount('#app');
