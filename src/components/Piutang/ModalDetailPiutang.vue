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
          <h5 class="modal-title" id="ModalCetakLabel">Detail Data Piutang</h5>
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
                    piutang.tgl_transaksi
                  }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Pembayaran</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ piutang.pembayaran }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Jatuh Tempo</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ piutang.jatuh_tempo }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Nama Pembeli</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ piutang.nama_pembeli }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Alamat Pembeli</label>
                <div class="col-sm-10">
                  <label class="form-control">{{
                    piutang.alamat_pembeli
                  }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Uang Muka</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ piutang.uang_muka }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Leasing</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ piutang.leasing }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">CT Pokok</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ piutang.ct_pokok }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">CT Bunga</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ piutang.ct_bunga }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Insentif SPF</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ piutang.insentif_spf }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Sisa Piutang</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ piutang.sisa_piutang }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Note Piutang</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ piutang.note_piutang }}</label>
                </div>
              </div>
            </div>
          </div>
          <!-- /.card-body -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="closeModal">
            Done
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
require("firebase/auth");
require("firebase/database");
export default {
  props: { id: String, closeModal: Function },
  data() {
    return {
      piutang: {},
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

    console.log(this.id);

    firebase
      .database()
      .ref("piutang")
      .child(this.id)
      .once("value")
      .then((snap) => {
        this.piutang = snap.val();
      });
  },
};
</script>

<style>
</style>