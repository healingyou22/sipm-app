<template>
  <div id="app">
    <div id="wrapper" v-if="!isLoginPage">
      <Sidebar></Sidebar>
      <router-view />
    </div>
    <router-view v-else />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  components: { Sidebar: Sidebar },
  data() {
    return {
      isLoginPage: true,
    };
  },
  created() {
    this.checkRouter();

    console.log(Notification.permission);

    if (Notification.permission === "granted") {
      // showNotification();
      console.log(Notification.permission);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          // showNotification();
          console.log(Notification.permission);
        }
      });
    }
  },
  beforeUpdate() {
    this.checkRouter();
  },
  methods: {
    checkRouter() {
      this.isLoginPage =
        this.$router.history.current.name === "login" ||
        this.$router.history.current.name === "Home";
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

a:hover {
  text-decoration: none;
}
</style>
