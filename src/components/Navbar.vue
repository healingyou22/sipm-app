<template>
  <!-- Topbar -->
  <nav
    class="navbar navbar-expand navbar-light topbar mb-4 static-top shadow"
    style="background-color: #182952"
  >
    <!-- Sidebar Toggle (Topbar) -->
    <button
      id="sidebarToggleTop"
      class="btn btn-link d-md-none rounded-circle mr-3"
    >
      <i class="fa fa-bars"></i>
    </button>

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
      <div class="topbar-divider d-none d-sm-block"></div>

      <!-- Nav Item - User Information -->
      <li class="nav-item dropdown no-arrow">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span
            id="show-useremail"
            class="mr-2 d-none d-lg-inline text-gray-600 small"
            >{{ user.email }}</span
          >
          <i class="fa fa-user img-circle"></i>
        </a>
        <!-- Dropdown - User Information -->
        <div
          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <button
            @click="signOut"
            class="dropdown-item"
            href="#"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </button>
        </div>
      </li>
    </ul>
  </nav>
  <!-- End of Topbar -->
</template>

<script>
import firebase from "firebase";
require("firebase/auth");
export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
      if (user) {
        this.user = user;
      } else {
        this.user = {};
      }
    });
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async signOut() {
      try {
        firebase.auth().signOut();
        this.$router.replace({ name: "login" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
</style>