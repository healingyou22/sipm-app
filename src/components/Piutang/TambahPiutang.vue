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
                  <h3 class="card-title text-left">Tambah Piutang</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body text-black text-left">
                  <div class="submit-form">
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Tanggal Transaksi</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="date"
                          class="form-control"
                          required
                          v-model="piutang.tgl_transaksi"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Pembayaran</label>
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="piutang.pembayaran"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Jatuh Tempo</label>
                      <div class="col-sm-10">
                        <input
                          type="date"
                          class="form-control"
                          required
                          v-model="piutang.jatuh_tempo"
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
                          v-model="piutang.nama_pembeli"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Alamat Pembeli</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          required
                          v-model="piutang.alamat_pembeli"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Uang Muka</label>
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="piutang.uang_muka"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Leasing</label>
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="piutang.leasing"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">CT Pokok</label>
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="piutang.ct_pokok"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">CT Bunga</label>
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="piutang.ct_bunga"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Insentif SPF</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="piutang.insentif_spf"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Sisa Piutang</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="piutang.sisa_piutang"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Note Piutang</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          required
                          v-model="piutang.note_piutang"
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
                        @click="insertData()"
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
      piutang: [],
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    insertData() {
      const db = firebase.database().ref("piutang");

      var data = {
        tgl_transaksi: this.piutang.tgl_transaksi,
        pembayaran: this.piutang.pembayaran,
        jatuh_tempo: this.piutang.jatuh_tempo,
        nama_pembeli: this.piutang.nama_pembeli,
        alamat_pembeli: this.piutang.alamat_pembeli,
        uang_muka: this.piutang.uang_muka,
        leasing: this.piutang.leasing,
        ct_pokok: this.piutang.ct_pokok,
        ct_bunga: this.piutang.ct_bunga,
        insentif_spf: this.piutang.insentif_spf,
        sisa_piutang: this.piutang.sisa_piutang,
        note_piutang: this.piutang.note_piutang,
      };

      this.piutang = [];

      db.push(data);

      swal({
        title: "Selamat",
        text: "Data berhasil ditambah!",
        icon: "success",
        button: "Ok",
      });

      this.$router.push({ name: "Piutang" });
    },
  },
};
</script>

<style>
</style>