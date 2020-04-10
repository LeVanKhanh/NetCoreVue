import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { MakeAuth } from "../src/plugins/auth/index";
import { AuthConfig } from "../src/plugins/auth/config";

AuthConfig.router = router;
MakeAuth(AuthConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
