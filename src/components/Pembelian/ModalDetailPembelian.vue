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
            Detail Data Pembelian
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
                <label class="col-sm-2 col-form-label">Unit Dibeli</label>
                <div class="col-sm-10">
                  <label class="form-control">{{
                    pembelian.unit_dibeli
                  }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Tanggal Pembelian</label>
                <div class="col-sm-10">
                  <label class="form-control">{{
                    pembelian.tgl_pembelian
                  }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Nama Pembeli</label>
                <div class="col-sm-10">
                  <label class="form-control">{{
                    pembelian.nama_pembeli2
                  }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label"
                  >Jumlah Unit Dibeli</label
                >
                <div class="col-sm-10">
                  <label class="form-control">{{
                    pembelian.jml_unit_beli
                  }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">SPF</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ pembelian.SPF }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Harga Beli</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ pembelian.harga_beli }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Note Pembelian</label>
                <div class="col-sm-10">
                  <label class="form-control">{{
                    pembelian.note_pembelian
                  }}</label>
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
      pembelian: {},
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
      .ref("pembelian")
      .child(this.id)
      .once("value")
      .then((snap) => {
        this.pembelian = snap.val();
      });
  },
};
</script>

<style>
</style>