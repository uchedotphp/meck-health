import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
