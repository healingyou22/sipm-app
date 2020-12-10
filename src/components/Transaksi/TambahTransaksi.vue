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
                  <h3 class="card-title text-left">Tambah Transaksi</h3>
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
                          v-model="transaksi.tgl_transaksi"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Jenis Penjualan</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          required
                          v-model="transaksi.penjualan_jenis"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Nama Customer</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          required
                          v-model="transaksi.nama_cust"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Alamat Customer</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          required
                          v-model="transaksi.alamat_cust"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Leasing</label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          required
                          v-model="transaksi.leasing"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Unit Type</label>
                      <div class="col-sm-10">
                        <select
                          class="form-control"
                          aria-label="Default select example"
                          v-model="transaksi.unit_type"
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
                      <label class="col-sm-2 col-form-label">Jumlah Unit</label>
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="transaksi.jml_unit"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Harga OTR</label>
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="transaksi.hargaOTR"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Harga TDP</label>
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="transaksi.hargaTDP"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">UM Murni</label>
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="transaksi.um_murni"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Payment</label>
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="transaksi.payment"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Sub Leasing</label>
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="transaksi.sub_leasing"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >SPF Transaksi</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="transaksi.SPF_transaksi"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Pencairan Leasing</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          v-model="transaksi.pencairan_leasing"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Nomor Polisi</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          required
                          v-model="transaksi.no_polisi"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Note Penjualan</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          required
                          v-model="transaksi.note_penjualan"
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
      transaksi: [],
    };
  },
  computed: {
    piutang_um() {
      return this.transaksi.um_murni - this.transaksi.payment;
    },
    harga_leasing() {
      return (
        this.transaksi.hargaOTR -
        this.transaksi.hargaTDP +
        parseInt(this.transaksi.sub_leasing)
      );
    },
    piutang_leasing() {
      return parseInt(this.harga_leasing) - this.transaksi.pencairan_leasing;
    },
  },
  methods: {
    back() {
      this.$router.back();
    },
    insertData() {
      const db = firebase.database().ref("transaksi");

      var data = {
        tgl_transaksi: this.transaksi.tgl_transaksi,
        penjualan_jenis: this.transaksi.penjualan_jenis,
        nama_cust: this.transaksi.nama_cust,
        alamat_cust: this.transaksi.alamat_cust,
        leasing: this.transaksi.leasing,
        unit_type: this.transaksi.unit_type,
        jml_unit: this.transaksi.jml_unit,
        hargaOTR: this.transaksi.hargaOTR,
        hargaTDP: this.transaksi.hargaTDP,
        um_murni: this.transaksi.um_murni,
        payment: this.transaksi.payment,
        sub_leasing: this.transaksi.sub_leasing,
        SPF_transaksi: this.transaksi.SPF_transaksi,
        pencairan_leasing: this.transaksi.pencairan_leasing,
        no_polisi: this.transaksi.no_polisi,
        note_penjualan: this.transaksi.note_penjualan,
        piutang_um: this.piutang_um,
        harga_leasing: this.harga_leasing,
        piutang_leasing: this.piutang_leasing,
      };

      this.transaksi = [];

      return db.push(data);
    },

    async pressed() {
      swal({
        title: "Selamat",
        text: "Data berhasil ditambah!",
        icon: "success",
        button: "Ok",
      });

      this.$router.push({ name: "Transaksi" });
    },
  },
};
</script>

<style>
</style>