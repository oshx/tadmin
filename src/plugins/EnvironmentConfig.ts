import Vue from "vue";

if (process.env.NODE_ENV === "production") {
  Vue.config.devtools = false;
  Vue.config.silent = true;
  Vue.config.productionTip = false;
}
