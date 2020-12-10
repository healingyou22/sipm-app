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
                  <h3 class="card-title text-left">Laporan Penjualan</h3>
                  <b-button @click="pressed" variant="primary float-left"
                    ><svg
                      data-v-41be6633=""
                      viewBox="0 0 16 16"
                      width="1em"
                      height="1em"
                      focusable="false"
                      role="img"
                      aria-label="folder plus"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi-folder-plus mx-auto b-icon bi"
                    >
                      <g data-v-41be6633="">
                        <path
                          fill-rule="evenodd"
                          d="M9.828 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91H9v1H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0 0 13.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293z"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"
                        ></path>
                      </g>
                    </svg>
                    Tambah Transaksi</b-button
                  >
                  <div class="input-group col-md-3 float-right">
                    <input
                      type="date"
                      id="cariData"
                      class="form-control bg-light border small"
                      v-model="caridate"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-primary"
                        type="button"
                        @click="cariDate"
                      >
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body table-responsive">
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
                        <th>Aksi</th>
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

                          <button
                            class="btn btn-danger btn-sm"
                            type="button"
                            id="delete_data"
                            @click="removeData(data.id)"
                            style="margin-left: 10px"
                          >
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              class="bi bi-trash"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                              />
                            </svg>
                          </button>

                          <button
                            class="btn btn-primary btn-sm"
                            type="button"
                            id="detail_data"
                            @click="detailData(data.id)"
                            data-toggle="modal"
                            data-target="#ModalDetail"
                            style="margin-left: 10px"
                          >
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              class="bi bi-info-square"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                              />
                              <path
                                d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"
                              />
                              <circle cx="8" cy="4.5" r="1" />
                            </svg>
                          </button>
                        </th>
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
    <!-- Modal Detail Transaksi-->
    <ModalDetailTransaksi
      v-if="isModalOpen"
      :id="transaksi_id"
      :closeModal="closeModal"
    />
  </div>
  <!-- End of Content Wrapper -->
</template>

<script>
import firebase from "firebase";
require("firebase/auth");
require("firebase/database");
import Navbar from "../components/Navbar";
import ModalDetailTransaksi from "../components/Transaksi/ModalDetailTransaksi";
import swal from "sweetalert";
export default {
  components: {
    Navbar,
    ModalDetailTransaksi,
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
    const db = firebase.database().ref("transaksi");
    db.on("value", this.resultData, this.errorData);
  },
  data() {
    return {
      loggedIn: false,
      transaksi: [],
      submitted: false,
      isModalOpen: false,
      transaksi_id: "",
      user: {},
      checkUser: "",
      caridate: ""
    };
  },
  methods: {
    async pressed() {
      this.$router.push({ name: "TambahTransaksi" });
    },
    resultData(items) {
      this.transaksi = [];

      items.forEach((item) => {
        let data = {
          id: item.key,
          tgl_transaksi: item.val().tgl_transaksi,
          penjualan_jenis: item.val().penjualan_jenis,
          nama_cust: item.val().nama_cust,
          leasing: item.val().leasing,
          unit_type: item.val().unit_type,
          jml_unit: item.val().jml_unit,
          payment: item.val().payment,
        };
        this.transaksi.push(data);
      });
    },
    errorData(error) {
      console.log(error);
    },
    removeData(id) {
      if (this.checkUser === "sales_counter@admin.com") {
        firebase
          .database()
          .ref("transaksi/" + id)
          .remove();
        swal({
          title: "Selamat",
          text: "Data berhasil dihapus!",
          icon: "success",
          button: "Ok",
        });
      } else {
        swal({
          title: "Maaf",
          text: "Anda tidak memiliki akses!",
          icon: "error",
          button: "Ok",
        });
      }
    },
    editData(data) {
      this.$router.push({ name: "UpdateTransaksi", params: { id: data.id } });
    },
    detailData(data) {
      this.transaksi_id = data;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    cariDate() {
      const db = firebase.database().ref("transaksi");
      this.transaksi = [];

      db.orderByChild("tgl_transaksi").equalTo(this.caridate).on("child_added", (item) => {
        let data = {
          id: item.key,
          tgl_transaksi: item.val().tgl_transaksi,
          penjualan_jenis: item.val().penjualan_jenis,
          nama_cust: item.val().nama_cust,
          leasing: item.val().leasing,
          unit_type: item.val().unit_type,
          jml_unit: item.val().jml_unit,
          payment: item.val().payment,
        };
        this.transaksi.push(data);
      })
    }
  },
};
</script>

<style>
</style>