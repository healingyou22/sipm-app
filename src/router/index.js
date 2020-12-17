import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Pembelian from '../views/Pembelian.vue'
import Piutang from '../views/Piutang.vue'
import PO_Unit from '../views/PO_Unit.vue'
import Transaksi from '../views/Transaksi.vue'
import Warehouse from '../views/Warehouse.vue'
import Testing from '../views/Testing.vue'
import TambahPiutang from '../components/Piutang/TambahPiutang.vue'
import TambahPembelian from '../components/Pembelian/TambahPembelian.vue'
import TambahTransaksi from '../components/Transaksi/TambahTransaksi.vue'
import TambahUnit from '../components/Warehouse/TambahUnit.vue'
import UpdatePiutang from '../components/Piutang/UpdatePiutang.vue'
import UpdatePembelian from '../components/Pembelian/UpdatePembelian.vue'
import UpdateUnit from '../components/Warehouse/UpdateUnit.vue'
import UpdateTransaksi from '../components/Transaksi/UpdateTransaksi.vue'
import MutasiUnit from '../views/MutasiUnit.vue'
import UpdateMutasiUnit from '../components/MutasiUnit/UpdateMutasiUnit'
import HistoryNotification from '../views/HistoryNotification'
import firebase from "firebase";
import swal from "sweetalert";
require("firebase/auth");

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {requiresAuth: true}
  },
  {
    path: '/pembelian',
    name: 'Pembelian',
    component: Pembelian,
    meta: {requiresAuth: true}
  },
  {
    path: '/piutang',
    name: 'Piutang',
    component: Piutang,
    meta: {requiresAuth: true}
  },
  {
    path: '/po_unit',
    name: 'PO_Unit',
    component: PO_Unit,
    meta: {requiresAuth: true},
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user != null) {

            if (user.email !== "manager@admin.com") {

                swal({
                title: "Maaf",
                text: "Anda tidak memiliki akses!",
                icon: "error",
                button: "Ok",
              });

            } else {
                next()
            }
        }
    })
    }
  },
  {
    path: '/transaksi',
    name: 'Transaksi',
    component: Transaksi,
    meta: {requiresAuth: true}
  },
  {
    path: '/warehouse',
    name: 'Warehouse',
    component: Warehouse,
    meta: {requiresAuth: true}
  },
  {
    path: '/testing',
    name: 'Testing',
    component: Testing,
    meta: {requiresAuth: true}
  },
  {
    path: '/tambah_piutang',
    name: 'TambahPiutang',
    component: TambahPiutang,
    meta: {requiresAuth: true},
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user != null) {

            if (user.email !== "manager@admin.com") {

                swal({
                title: "Maaf",
                text: "Anda tidak memiliki akses!",
                icon: "error",
                button: "Ok",
              });

            } else {
                next()
            }
        }
    })
    }
  },
  {
    path: '/tambah_pembelian',
    name: 'TambahPembelian',
    component: TambahPembelian,
    meta: {requiresAuth: true},
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user != null) {

            if (user.email !== "manager@admin.com") {

                swal({
                title: "Maaf",
                text: "Anda tidak memiliki akses!",
                icon: "error",
                button: "Ok",
              });

            } else {
                next()
            }
        }
    })
    }
  },
  {
    path: '/tambah_transaksi',
    name: 'TambahTransaksi',
    component: TambahTransaksi,
    meta: {requiresAuth: true},
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user != null) {

            if (user.email !== "sales_counter@admin.com") {

                swal({
                title: "Maaf",
                text: "Anda tidak memiliki akses!",
                icon: "error",
                button: "Ok",
              });

            } else {
                next()
            }
        }
    })
    }
  },
  {
    path: '/tambah_unit',
    name: 'TambahUnit',
    component: TambahUnit,
    meta: {requiresAuth: true},
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user != null) {

            if (user.email !== "manager@admin.com") {

              swal({
                title: "Maaf",
                text: "Anda tidak memiliki akses!",
                icon: "error",
                button: "Ok",
              });

            } else {
                next()
            }
        }
    })
    }
  },
  {
    path: '/update_piutang/:id',
    name: 'UpdatePiutang',
    component: UpdatePiutang,
    meta: {requiresAuth: true},
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user != null) {

            if (user.email !== "manager@admin.com") {

              swal({
                title: "Maaf",
                text: "Anda tidak memiliki akses!",
                icon: "error",
                button: "Ok",
              });

            } else {
                next()
            }
        }
    })
    }
  },
  {
    path: '/update_pembelian/:id',
    name: 'UpdatePembelian',
    component: UpdatePembelian,
    meta: {requiresAuth: true},
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user != null) {

            if (user.email !== "manager@admin.com") {

              swal({
                title: "Maaf",
                text: "Anda tidak memiliki akses!",
                icon: "error",
                button: "Ok",
              });

            } else {
                next()
            }
        }
    })
    }
  },
  {
    path: '/update_unit/:id',
    name: 'UpdateUnit',
    component: UpdateUnit,
    meta: {requiresAuth: true},
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user != null) {

            if (user.email !== "manager@admin.com") {

              swal({
                title: "Maaf",
                text: "Anda tidak memiliki akses!",
                icon: "error",
                button: "Ok",
              });

            } else {
                next()
            }
        }
    })
    }
  },
  {
    path: '/update_transaksi/:id',
    name: 'UpdateTransaksi',
    component: UpdateTransaksi,
    meta: {requiresAuth: true},
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user != null) {

            if (user.email !== "sales_counter@admin.com") {

              swal({
                title: "Maaf",
                text: "Anda tidak memiliki akses!",
                icon: "error",
                button: "Ok",
              });

            } else {
                next()
            }
        }
    })
    }
  },
  {
    path: '/mutasi_unit',
    name: 'MutasiUnit',
    component: MutasiUnit,
    meta: {requiresAuth: true},
  },
  {
    path: '/update_mutasi_unit',
    name: 'UpdateMutasiUnit',
    component: UpdateMutasiUnit,
    meta: {requiresAuth: true},
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user != null) {

            if (user.email !== "manager@admin.com") {

              swal({
                title: "Maaf",
                text: "Anda tidak memiliki akses!",
                icon: "error",
                button: "Ok",
              });

            } else {
                next()
            }
        }
    })
    }
  },
  {
    path: '/history_notification',
    name: 'HistoryNotification',
    component: HistoryNotification,
    meta: {requiresAuth: true},
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=> {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated){
    next("/login");
  } else {
    next();
  }
})

export default router
