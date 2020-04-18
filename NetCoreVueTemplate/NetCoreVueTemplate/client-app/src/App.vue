<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { authGuard } from "../src/plugins/auth/authGuard";

export default {
  data: () => ({
    isAuthenticated: false
  }),

  mounted() {
    authGuard(async () => {
      const token = await this.$auth.getTokenSilently();
      this.isAuthenticated = true;
      console.log(this.isAuthenticated);
      // axios.defaults.headers["Authorization"] = `Bearer ${token}`;
    });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
