import Vue, { VNode } from "vue";
import App from "@/views/App.vue";

export const el = "#app";

export const render = (h: typeof Vue.prototype.$createElement): VNode => h(App);
