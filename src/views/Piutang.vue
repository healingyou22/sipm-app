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
                  <h3 class="card-title text-left">Laporan Piutang</h3>
                  <b-button variant="primary float-left" @click="pressed"
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
                    Tambah Data Piutang</b-button
                  >
                  <div class="input-group col-md-3 float-right">
                    <input
                      type="date"
                      id="cariData"
                      class="form-control bg-light border small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
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
                <div class="card-body text-white">
                  <table
                    id="tabel-piutang"
                    class="table table-bordered"
                    style="color: black"
                  >
                    <thead class="thead-dark text-center">
                      <tr>
                        <th>#</th>
                        <th>Tanggal Transaksi</th>
                        <th>Jatuh Tempo</th>
                        <th>Nama Pembeli</th>
                        <th>Uang Muka</th>
                        <th>Leasing</th>
                        <th>CT Pokok</th>
                        <th>CT Bunga</th>
                        <th>Insentif SPF</th>
                        <th>Sisa Piutang</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody
                      style="background-color: #f6f6f6"
                      class="text-center"
                    >
                      <tr v-for="(data, index) in piutang" :key="data.id">
                        <th>{{ index + 1 }}</th>
                        <th>{{ data.tgl_transaksi }}</th>
                        <th>{{ data.jatuh_tempo }}</th>
                        <th class="text-left">{{ data.nama_pembeli }}</th>
                        <th>{{ data.uang_muka }}</th>
                        <th>{{ data.leasing }}</th>
                        <th>{{ data.ct_pokok }}</th>
                        <th>{{ data.ct_bunga }}</th>
                        <th>{{ data.insentif_spf }}</th>
                        <th>{{ data.sisa_piutang }}</th>
                        <th>
                          <button
                            class="btn btn-success btn-sm"
                            type="button"
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
                            style="margin-left: 10px"
                            id="delete_data"
                            @click="removeData(data.id)"
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
                            style="margin-left: 10px"
                            @click="detailData(data.id)"
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
    <!-- Modal Detail Piutang-->
    <ModalDetailPiutang
      v-if="isModalOpen"
      :id="piutang_id"
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
import ModalDetailPiutang from "../components/Piutang/ModalDetailPiutang";
import swal from "sweetalert";
export default {
  components: {
    Navbar,
    ModalDetailPiutang,
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
    const db = firebase.database().ref("piutang");
    db.on("value", this.resultData, this.errorData);
  },
  data() {
    return {
      loggedIn: false,
      piutang: [],
      submitted: false,
      isModalOpen: false,
      piutang_id: "",
      user: {},
      checkUser: "",
      caridate: "",
      date: new Date(),
    };
  },
  methods: {
    async pressed() {
      this.$router.push({ name: "TambahPiutang" });
    },
    resultData(items) {
      this.piutang = [];

      items.forEach((item) => {
        let data = {
          id: item.key,
          tgl_transaksi: item.val().tgl_transaksi,
          jatuh_tempo: item.val().jatuh_tempo,
          nama_pembeli: item.val().nama_pembeli,
          uang_muka: item.val().uang_muka,
          leasing: item.val().leasing,
          ct_pokok: item.val().ct_pokok,
          ct_bunga: item.val().ct_bunga,
          insentif_spf: item.val().insentif_spf,
          sisa_piutang: item.val().sisa_piutang,
        };
        this.piutang.push(data);
      });
    },
    errorData(error) {
      console.log(error);
    },
    notifications() {
      const db = firebase.database().ref("notifications");

      var data = {
        user: firebase.auth().currentUser.email,
        message: "Telah menghapus laporan piutang",
        time: this.date.toLocaleTimeString(),
        date: this.date.toLocaleDateString(),
      };

      return db.push(data);
    },
    removeData(id) {
      if (this.checkUser === "manager@admin.com") {
        swal({
          title: "Apakah Yakin Ingin Menghapus Data Ini?",
          text: "Data Tidak Dapat Kembali Setelah Dihapus!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            firebase
              .database()
              .ref("piutang/" + id)
              .remove();
            swal("Data Telah Berhasil Dihapus!", {
              icon: "success",
            });
            this.notifications();
            this.showNotification();
          } else {
            swal("Data Batal Untuk Dihapus!");
          }
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
      this.$router.push({ name: "UpdatePiutang", params: { id: data.id } });
    },
    detailData(data) {
      this.piutang_id = data;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    cariDate() {
      const db = firebase.database().ref("piutang");
      this.piutang = [];

      db.orderByChild("tgl_transaksi")
        .equalTo(this.caridate)
        .on("child_added", (item) => {
          let data = {
            id: item.key,
            tgl_transaksi: item.val().tgl_transaksi,
            jatuh_tempo: item.val().jatuh_tempo,
            nama_pembeli: item.val().nama_pembeli,
            uang_muka: item.val().uang_muka,
            leasing: item.val().leasing,
            ct_pokok: item.val().ct_pokok,
            ct_bunga: item.val().ct_bunga,
            insentif_spf: item.val().insentif_spf,
            sisa_piutang: item.val().sisa_piutang,
          };
          this.piutang.push(data);
        });
    },
    showNotification() {
      const notification = new Notification(firebase.auth().currentUser.email, {
        body: "Telah menghapus laporan piutang " + this.date.toLocaleString(),
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