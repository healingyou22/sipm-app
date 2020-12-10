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
                  <h3 class="card-title text-left">Update Data Warehouse</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body text-black text-left">
                  <div class="submit-form">
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Unit Date</label>
                      <div class="col-sm-10">
                        <input
                          type="date"
                          class="form-control"
                          required
                          v-model="warehouse.unit_date"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Unit Type</label>
                      <div class="col-sm-10">
                        <select
                          class="form-control"
                          aria-label="Default select example"
                          v-model="warehouse.unit_type"
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
                      <label class="col-sm-2 col-form-label">Unit Warna</label>
                      <div class="col-sm-10">
                        <select
                          class="form-control"
                          aria-label="Default select example"
                          v-model="warehouse.unit_warna"
                        >
                          <option value="Warna1">Warna1</option>
                          <option value="Warna1">Warna1</option>
                          <option value="Warna1">Warna1</option>
                          <option value="Warna1">Warna1</option>
                          <option value="Warna1">Warna1</option>
                          <option value="Warna1">Warna1</option>
                          <option value="Warna1">Warna1</option>
                          <option value="Warna1">Warna1</option>
                          <option value="Warna1">Warna1</option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Nomor Rangka</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          required
                          v-model="warehouse.no_rangka"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Nomor Mesin</label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          required
                          v-model="warehouse.no_mesin"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Unit Asal</label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          required
                          v-model="warehouse.unit_asal"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Date Sell</label>
                      <div class="col-sm-10">
                        <input
                          type="date"
                          class="form-control"
                          required
                          v-model="warehouse.date_sell"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Status</label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          required
                          v-model="warehouse.status"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Note Warehouse</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          required
                          v-model="warehouse.note_warehouse"
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
      .ref("warehouse")
      .child(this.id)
      .once("value")
      .then((snap) => {
        this.warehouse = snap.val();
      });
  },
  components: {
    Navbar,
  },
  data() {
    return {
      id: this.$route.params.id,
      warehouse: {},
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    updateData() {
      const db = firebase.database().ref("warehouse/" + this.id);

      db.update({
        unit_date: this.warehouse.unit_date,
        unit_type: this.warehouse.unit_type,
        unit_warna: this.warehouse.unit_warna,
        no_rangka: this.warehouse.no_rangka,
        no_mesin: this.warehouse.no_mesin,
        unit_asal: this.warehouse.unit_asal,
        date_sell: this.warehouse.date_sell,
        status: this.warehouse.status,
        note_warehouse: this.warehouse.note_warehouse,
      });

      swal({
        title: "Selamat",
        text: "Data berhasil diupdate!",
        icon: "success",
        button: "Ok",
      });

      this.$router.push({ name: "Warehouse" });
    },
  },
};
</script>

<style>
</style>