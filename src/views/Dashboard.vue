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
                  <h3 class="card-title text-left">
                    Dashboard Laporan Penjualan
                  </h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body text-white table-responsive">
                  <table
                    id="tabel-transaksi"
                    class="table table-bordered"
                    style="color: black"
                  >
                    <thead class="thead-dark text-center">
                      <tr>
                        <th>#</th>
                        <th>Tanggal Transaksi</th>
                        <th>Jenis Penjualan</th>
                        <th>Nama Customer</th>
                        <th>Leasing</th>
                        <th>Unit Type</th>
                        <th>Jumlah Unit</th>
                        <th>Payment</th>
                        <th>Piutang UM</th>
                        <th>Piutang Leasing</th>
                        <th>Nomor Polisi</th>
                        <th>Note Penjualan</th>
                      </tr>
                    </thead>
                    <tbody
                      style="background-color: #f6f6f6"
                      class="text-center"
                    >
                      <tr v-for="(data, index) in transaksi" :key="data.id">
                        <th>{{ index + 1 }}</th>
                        <th>{{ data.tgl_transaksi }}</th>
                        <th>{{ data.penjualan_jenis }}</th>
                        <th class="text-left">{{ data.nama_cust }}</th>
                        <th>{{ data.leasing }}</th>
                        <th>{{ data.unit_type }}</th>
                        <th>{{ data.jml_unit }}</th>
                        <th>{{ data.payment }}</th>
                        <th>{{ data.piutang_um }}</th>
                        <th>{{ data.piutang_leasing }}</th>
                        <th>{{ data.no_polisi }}</th>
                        <th>{{ data.note_penjualan }}</th>
                      </tr>
                    </tbody>
                  </table>
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
import Navbar from "../components/Navbar";
export default {
  components: {
    Navbar,
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
      if (user) {
        this.loggedIn = true;
      } else {
        this.logged = false;
      }
    });
    const db = firebase.database().ref("transaksi");
    db.on("value", this.resultData, this.errorData);
  },
  data() {
    return {
      loggedIn: false,
      transaksi: [],
    };
  },
  methods: {
    resultData(items) {
      items.forEach((item) => {
        this.transaksi.push(item.val());
      });
    },
    errorData(error) {
      console.log(error);
    },
  },
};
</script>

<style>
</style>