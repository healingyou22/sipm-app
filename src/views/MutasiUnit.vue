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
                  <h3 class="card-title text-left">Mutasi Unit</h3>
                  <div class="input-group col-md-3 float-right"/>
                </div>
                <!-- /.card-header -->
                <div class="card-body text-white">
                  <table
                    id="tabel-mutasi_unit"
                    class="table table-bordered"
                    style="color: black"
                  >
                    <thead class="thead-dark text-center">
                      <tr>
                        <th>#</th>
                        <th>Unit Type</th>
                        <th>Harga</th>
                        <th>Stock Awal</th>
                        <th>Pembelian</th>
                        <th>Penjualan</th>
                        <th>Stock Akhir</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody
                      style="background-color: #f6f6f6"
                      class="text-center"
                    >
                      <tr v-for="(data, index) in mutasi_unit" :key="data.id">
                        <th>{{ index + 1 }}</th>
                        <th>{{ data.unit_type }}</th>
                        <th>{{ data.harga }}</th>
                        <th>{{ data.stock_awal }}</th>
                        <th>{{ data.pembelian }}</th>
                        <th>{{ data.penjualan }}</th>
                        <th>{{ data.stock_akhir }}</th>
                        <th>
                          <button
                            class="btn btn-success btn-sm"
                            type="button"
                            id="update_data"
                            @click="editData(data)"
                          >
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              class="bi bi-pencil-square"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                              />
                            </svg>
                          </button>
                        </th>
                      </tr>
                    </tbody>
                  </table> -->
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
        this.loggedIn = user;
      } else {
        this.logged = {};
      }
      this.checkUser = user.email;
    });

    const db = firebase.database().ref("mutasi_unit");
    db.on("value", this.resultData, this.errorData);
  },
  data() {
    return {
      loggedIn: false,
      user: {},
      checkUser: "",
      mutasi_unit: []
    };
  },
  methods: {
    resultData(items) {
      this.mutasi_unit = [];

      items.forEach((item) => {
        let data = {
          id: item.key,
          unit_type: item.val().unit_type,
          harga: item.val().harga,
          stock_awal: item.val().stock_awal,
          pembelian: item.val().pembelian,
          penjualan: item.val().penjualan,
          stock_akhir: item.val().stock_akhir,
        };
        this.mutasi_unit.push(data);
      });
    },
    errorData(error) {
      console.log(error);
    },
    editData(data) {
      this.$router.push({ name: "UpdateMutasiUnit", params: { id: data.id } });
    }
  }
}
</script>

<style>

</style>