<template>
  <div
    class="modal fade show"
    id="ModalCetak"
    tabindex="-1"
    role="dialog"
    aria-labelledby="ModalCetakLabel"
    style="display: block; padding-right: 16px"
    aria-modal="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="ModalCetakLabel">
            Detail Data Transaksi
          </h5>
          <a
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
          >
            <span aria-hidden="true">×</span>
          </a>
        </div>
        <div class="modal-body" id="modal_cetak">
          <!-- /.card-header -->
          <div class="card-body text-black text-left">
            <div class="submit-form">
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Tanggal Transaksi</label>
                <div class="col-sm-10">
                  <label class="form-control">{{
                    transaksi.tgl_transaksi
                  }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Jenis Penjualan</label>
                <div class="col-sm-10">
                  <label class="form-control">{{
                    transaksi.penjualan_jenis
                  }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Nama Customer</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ transaksi.nama_cust }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Alamat Customer</label>
                <div class="col-sm-10">
                  <label class="form-control">{{
                    transaksi.alamat_cust
                  }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Leasing</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ transaksi.leasing }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Unit Type</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ transaksi.unit_type }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Jumlah Unit</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ transaksi.jml_unit }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Harga OTR</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ transaksi.hargaOTR }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Harga TDP</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ transaksi.hargaTDP }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">UM Murni</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ transaksi.um_murni }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Payment</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ transaksi.payment }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Sub Leasing</label>
                <div class="col-sm-10">
                  <label class="form-control">{{
                    transaksi.sub_leasing
                  }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">SPF Transaksi</label>
                <div class="col-sm-10">
                  <label class="form-control">{{
                    transaksi.SPF_transaksi
                  }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Pencairan Leasing</label>
                <div class="col-sm-10">
                  <label class="form-control">{{
                    transaksi.pencairan_leasing
                  }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Piutang UM</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ transaksi.piutang_um }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Harga Leasing</label>
                <div class="col-sm-10">
                  <label class="form-control">{{
                    transaksi.harga_leasing
                  }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Piutang Leasing</label>
                <div class="col-sm-10">
                  <label class="form-control">{{
                    transaksi.piutang_leasing
                  }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Nomor Polisi</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ transaksi.no_polisi }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Note Penjualan</label>
                <div class="col-sm-10">
                  <label class="form-control">{{
                    transaksi.note_penjualan
                  }}</label>
                </div>
              </div>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end"></div>
            </div>
          </div>
          <!-- /.card-body -->
        </div>
        <div class="modal-footer">
          <button
            class="btn btn-danger me-md-2"
            type="button"
            @click="closeModal"
          >
            Back
          </button>
          <button class="btn btn-success" type="button" @click="buka">
            Cetak
          </button>
        </div>
      </div>
    </div>
    <ModalCetakTransaksi v-if="modal" :id="cetak_id" :tutup="tutup" />
  </div>
</template>

<script>
import firebase from "firebase";
require("firebase/auth");
require("firebase/database");
import ModalCetakTransaksi from "../Transaksi/ModalCetakTransaksi";
export default {
  components: {
    ModalCetakTransaksi,
  },
  props: { id: String, closeModal: Function },
  data() {
    return {
      transaksi: {},
      submitted: false,
      modal: false,
      cetak_id: "",
    };
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

    firebase
      .database()
      .ref("transaksi")
      .child(this.id)
      .once("value")
      .then((snap) => {
        this.transaksi = snap.val();
      });
  },
  methods: {
    buka() {
      this.cetak_id = this.id;

      this.modal = true;
    },
    tutup() {
      this.modal = false;
    },
  },
};
</script>

<style>
</style>