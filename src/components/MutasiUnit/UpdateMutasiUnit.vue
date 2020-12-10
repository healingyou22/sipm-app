<template>
  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">
    <!-- Main Content -->
    <div id="content">
      <!-- Topbar -->
      <Navbar></Navbar>
      <!-- End of Topbar -->
      <!-- Begin Page Content -->
      <div class="container-fluid">
        <section class="content">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header text-white bg-dark">
                  <h3 class="card-title text-left">Update Mutasi Unit</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body text-black text-left">
                  <div class="submit-form">
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Stock Awal</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="mutasi_unit.stock_awal"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Pembelian</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="mutasi_unit.pembelian"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Penjualan</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="mutasi_unit.penjualan"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Stock Akhir</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="mutasi_unit.stock_akhir"
                        />
                      </div>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button
                        class="btn btn-danger me-md-2"
                        type="button"
                        @click="back()"
                      >
                        Back
                      </button>
                      <button
                        class="btn btn-success"
                        type="button"
                        @click="updateData()"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card -->
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </section>
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- End of Main Content -->
    <!-- Footer -->
    <footer class="sticky-footer bg-white">
      <div class="container my-auto">
        <div class="copyright text-center my-auto">
          <span>Copyright &copy; Your Website 2019</span>
        </div>
      </div>
    </footer>
    <!-- End of Footer -->
  </div>
  <!-- End of Content Wrapper -->
</template>

<script>
import firebase from "firebase";
require("firebase/auth");
require("firebase/database");
import Navbar from "../Navbar.vue";
import swal from "sweetalert";
export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
      if (user) {
        this.loggedIn = true;
      } else {
        this.logged = false;
      }
    });

    firebase
      .database()
      .ref("mutasi_unit")
      .child(this.id)
      .once("value")
      .then((snap) => {
        this.mutasi_unit = snap.val();
      });
  },
  components: {
    Navbar,
  },
  data() {
    return {
      id: this.$route.params.id,
      mutasi_unit: {},
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    updateData() {
      const db = firebase.database().ref("mutasi_unit/" + this.id);

      db.update({
          stock_awal: this.mutasi_unit.stock_awal,
          pembelian: this.mutasi_unit.pembelian,
          penjualan: this.mutasi_unit.penjualan,
          stock_akhir: this.mutasi_unit.stock_akhir,
      });

      swal({
        title: "Selamat",
        text: "Data berhasil diupdate!",
        icon: "success",
        button: "Ok",
      });

      this.$router.push({ name: "MutasiUnit" });
    },
  },
};
</script>

<style>
</style>