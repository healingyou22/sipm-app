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
            Detail Data Warehouse
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
                <label class="col-sm-2 col-form-label">Unit Date</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ warehouse.unit_date }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Unit Type</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ warehouse.unit_type }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Unit Warna</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ warehouse.unit_warna }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Nomor Rangka</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ warehouse.no_rangka }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Nomor Mesin</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ warehouse.no_mesin }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Unit Asal</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ warehouse.unit_asal }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Date Sell</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ warehouse.date_sell }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Status</label>
                <div class="col-sm-10">
                  <label class="form-control">{{ warehouse.status }}</label>
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Note Warehouse</label>
                <div class="col-sm-10">
                  <label class="form-control">{{
                    warehouse.note_warehouse
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
      warehouse: {},
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
      .ref("warehouse")
      .child(this.id)
      .once("value")
      .then((snap) => {
        this.warehouse = snap.val();
      });
  },
};
</script>

<style>
</style>