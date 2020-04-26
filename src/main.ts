import "@/plugins";

// application instance
import Vue from "vue";
import router from "@/router/router";
import store from "@/db";
import { render, el } from "@/config";

new Vue({
  el,
  router,
  store,
  render
});
