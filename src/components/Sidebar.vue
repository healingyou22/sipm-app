<template>
  <!-- Sidebar -->
  <ul
    class="navbar-nav sidebar sidebar-dark accordion"
    :class="{ toggled: sidebarOpen }"
    id="accordionSidebar"
    style="background-color: #182952"
  >
    <!-- Sidebar - Brand -->
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center text-white"
    >
      <div class="sidebar-brand-text mx-3">SIPM Dealer Suzuki</div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
      <router-link class="nav-link" to="/dashboard">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">Menu</div>

    <!-- Nav Item - Transaksi Collapse Menu -->
    <li class="nav-item">
      <router-link class="nav-link" to="/transaksi">
        <svg
          data-v-41be6633=""
          viewBox="0 0 16 16"
          width="1em"
          height="1em"
          focusable="false"
          role="img"
          aria-label="receipt"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi-receipt mx-auto b-icon bi"
        >
          <g data-v-41be6633="">
            <path
              fill-rule="evenodd"
              d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"
            ></path>
            <path
              fill-rule="evenodd"
              d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
            ></path>
          </g>
        </svg>
        <span> Transaksi</span>
      </router-link>
    </li>

    <!-- Nav Item - Warehouse Collapse Menu -->
    <li class="nav-item">
      <router-link class="nav-link" to="/warehouse">
        <svg
          data-v-41be6633=""
          viewBox="0 0 16 16"
          width="1em"
          height="1em"
          focusable="false"
          role="img"
          aria-label="house"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi-house mx-auto b-icon bi"
        >
          <g data-v-41be6633="">
            <path
              fill-rule="evenodd"
              d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            ></path>
            <path
              fill-rule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
            ></path>
          </g>
        </svg>
        <span> Warehouse</span>
      </router-link>
    </li>

    <!-- Nav Item - Pembelian Collapse Menu -->
    <li class="nav-item">
      <router-link class="nav-link" to="/pembelian">
        <svg
          data-v-41be6633=""
          viewBox="0 0 16 16"
          width="1em"
          height="1em"
          focusable="false"
          role="img"
          aria-label="cart"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi-cart mx-auto b-icon bi"
        >
          <g data-v-41be6633="">
            <path
              fill-rule="evenodd"
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
            ></path>
          </g>
        </svg>
        <span> Pembelian</span>
      </router-link>
    </li>

    <!-- Nav Item - Piutang Collapse Menu -->
    <li class="nav-item">
      <router-link class="nav-link" to="/piutang">
        <svg
          data-v-41be6633=""
          viewBox="0 0 16 16"
          width="1em"
          height="1em"
          focusable="false"
          role="img"
          aria-label="credit card"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi-credit-card mx-auto b-icon bi"
        >
          <g data-v-41be6633="">
            <path
              fill-rule="evenodd"
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"
            ></path>
            <path
              d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"
            ></path>
          </g>
        </svg>
        <span> Piutang</span>
      </router-link>
    </li>

    <!-- Nav Item - Piutang Collapse Menu -->
    <li class="nav-item">
      <router-link class="nav-link" to="/mutasi_unit">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-clipboard-data"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
          />
          <path
            fill-rule="evenodd"
            d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
          />
          <path
            d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"
          />
        </svg>
        <span> Mutasi Unit</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
      <router-link class="nav-link" to="/po_unit">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-file-text"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"
          />
          <path
            fill-rule="evenodd"
            d="M4.5 10.5A.5.5 0 0 1 5 10h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        <span> Cetak PO Unit</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button
        class="rounded-circle border-0"
        id="sidebarToggle"
        @click="toggleSidebar"
      ></button>
    </div>
  </ul>
  <!-- End of Sidebar -->
</template>

<script>
import firebase from "firebase";
require("firebase/auth");
export default {
  data() {
    return {
      sidebarOpen: false,
      user: {},
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
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
};
</script>

<style>
</style>