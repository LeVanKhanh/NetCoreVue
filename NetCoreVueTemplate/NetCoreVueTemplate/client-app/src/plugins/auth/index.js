import Vue from "vue";
import { Auth0Plugin } from "../auth/wrapper";

export function MakeAuth({ domain, clientId, router }) {
  Vue.use(Auth0Plugin, {
    domain,
    clientId,
    onRedirectCallback: appState => {
      router.push(
        appState && appState.targetUrl
          ? appState.targetUrl
          : window.location.pathname
      );
    }
  });
}
