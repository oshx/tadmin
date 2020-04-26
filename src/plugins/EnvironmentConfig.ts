import Vue from "vue";

if (process.env.NODE_ENV === "production") {
  Vue.config = {
    ...Vue.config,
    devtools: false,
    silent: true,
    productionTip: false
  };
}
