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
                  <h3 class="card-title text-left">Tambah Pembelian</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body text-black text-left">
                  <div class="submit-form">
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Unit Dibeli</label>
                      <div class="col-sm-10">
                        <select
                          class="form-control"
                          aria-label="Default select example"
                          v-model="pembelian.unit_dibeli"
                        >
                          <option value="UX110NE">UX110NE</option>
                          <option value="UK110NEZ">UK110NEZ</option>
                          <option value="FU150MF">FU150MF</option>
                          <option value="FU150MFX/A">FU150MFX/A</option>
                          <option value="FU150MFZ">FU150MFZ</option>
                          <option value="BANDIT">BANDIT</option>
                          <option value="GSX-S/A">GSX-S/A</option>
                          <option value="GSX-R">GSX-R</option>
                          <option value="GSX-R/ABS">GSX-R/ABS</option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Tanggal Pembelian</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="date"
                          class="form-control"
                          required
                          v-model="pembelian.tgl_pembelian"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Nama Pembeli</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          required
                          v-model="pembelian.nama_pembeli2"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Jumlah Unit Dibeli</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="pembelian.jml_unit_beli"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">SPF</label>
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="pembelian.SPF"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Harga Beli</label>
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="pembelian.harga_beli"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Note Pembelian</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          required
                          v-model="pembelian.note_pembelian"
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
                        @click="
                          insertData();
                          pressed();
                        "
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
import Navbar from "../Navbar.vue";
require("firebase/auth");
require("firebase/database");
import swal from "sweetalert";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      pembelian: [],
      date: new Date(),
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    notifications() {
      const db = firebase.database().ref("notifications");

      var data = {
        user: firebase.auth().currentUser.email,
        message: "Telah menambahkan laporan pembelian",
        time: this.date.toLocaleTimeString(),
        date: this.date.toLocaleDateString(),
      };

      return db.push(data);
    },
    insertData() {
      const db = firebase.database().ref("pembelian");

      var data = {
        unit_dibeli: this.pembelian.unit_dibeli,
        tgl_pembelian: this.pembelian.tgl_pembelian,
        nama_pembeli2: this.pembelian.nama_pembeli2,
        jml_unit_beli: this.pembelian.jml_unit_beli,
        SPF: this.pembelian.SPF,
        harga_beli: this.pembelian.harga_beli,
        note_pembelian: this.pembelian.note_pembelian,
      };

      this.pembelian = [];

      db.push(data);
      this.notifications();
      this.showNotification();
    },
    async pressed() {
      swal({
        title: "Selamat",
        text: "Data berhasil ditambah!",
        icon: "success",
        button: "Ok",
      });

      this.$router.push({ name: "Pembelian" });
    },
    showNotification() {
      const notification = new Notification(firebase.auth().currentUser.email, {
        body:
          "Telah menambahkan laporan pembelian " + this.date.toLocaleString(),
      });

      notification.onclick = () => {
        this.$router.push({ name: "HistoryNotification" });
      };
    },
  },
};
</script>

<style>
</style>