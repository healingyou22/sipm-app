<template>
  <div
    class="modal fade show"
    id="ModalCetakTransaksi"
    tabindex="-1"
    role="dialog"
    aria-labelledby="ModalCetakLabel"
    style="display: block; padding-right: 16px"
    aria-modal="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="ModalCetakLabel">Cetak Data Transaksi</h5>
          <a
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="tutup"
          >
            <span aria-hidden="true">×</span>
          </a>
        </div>
        <div class="modal-body" id="modal_cetak_transaksi">
          <!-- Modal Cetak -->
          <h4 class="float-right">PELUNASAN</h4>
          <h4 class="text-left">SUZUKI KATANG</h4>
          <h6 class="text-left">JL.Pamenang No.19 Ngasem Kab.Kediri</h6>
          <br />
          <h4 class="text-center">KWITANSI</h4>
          <table>
            <tr class="text-left">
              <td><label>Telah terima dari</label></td>
              <td><label></label></td>
              <td><label></label></td>
            </tr>
            <tr class="text-left">
              <td><label>Nama Konsumen</label></td>
              <td><label>:&nbsp;</label></td>
              <td class="text-left">
                <label id="cetak_nama_cust">{{ transaksi.nama_cust }}</label>
              </td>
            </tr>
            <tr class="text-left">
              <td><label>Alamat</label></td>
              <td><label>:&nbsp;</label></td>
              <td>
                <label id="cetak_alamat_cust">{{
                  transaksi.alamat_cust
                }}</label>
              </td>
            </tr>
            <tr class="text-left">
              <td><label>Untuk Pembayaran</label></td>
              <td><label> : </label></td>

              <td><label></label></td>
              <td><label></label></td>
              <td><label></label></td>
            </tr>
            <tr class="text-left">
              <td><label></label></td>
              <td><label></label></td>
              <td width="500">
                <label
                  >Merk
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  :&nbsp;</label
                ><label id="cetak_merk">Suzuki</label>
              </td>
            </tr>
            <tr class="text-left">
              <td><label></label></td>
              <td><label></label></td>
              <td width="500">
                <label
                  >Type
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  :&nbsp;</label
                ><label id="cetak_unit_type">{{ transaksi.unit_type }}</label>
              </td>
            </tr>
            <tr class="text-left">
              <td><label></label></td>
              <td><label></label></td>
              <td>
                <label>Harga OTR :&nbsp;</label
                ><label id="cetak_hargaOTR">Rp {{ transaksi.hargaOTR }}</label>
              </td>
              <td><label></label></td>
              <td><label></label></td>
              <td><label></label></td>
            </tr>
            <tr class="text-left">
              <td><label></label></td>
              <td><label></label></td>
              <td>
                <label>Uang Muka :&nbsp;</label
                ><label id="cetak_um_murni">Rp {{ transaksi.um_murni }}</label>
              </td>
              <td><label></label></td>
              <td><label></label></td>
              <td><label></label></td>
            </tr>
            <tr>
              <td><label></label></td>
              <td><label></label></td>
              <td><label></label></td>
              <td><label></label></td>
              <td><label></label></td>
              <td>
                <label>Kediri,&nbsp;</label
                ><label id="cetak_tgl_transaksi">{{
                  transaksi.tgl_transaksi
                }}</label>
              </td>
            </tr>
            <tr class="text-left">
              <td><label></label></td>
              <td><label></label></td>
              <td>
                <label
                  >Jumlah&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  :&nbsp; </label
                ><label id="cetak_payment">Rp {{ transaksi.payment }}</label>
              </td>
            </tr>
            <tr>
              <td><label></label></td>
              <td><label></label></td>
              <td><label></label></td>
              <td><label></label></td>
              <td><label></label></td>
              <td><label></label></td>
            </tr>
            <tr>
              <td><label></label></td>
              <td><label></label></td>
              <td><label></label></td>
              <td><label></label></td>
              <td width="150"><label></label></td>
              <td><label>W. Dian Mumpuni</label></td>
            </tr>
          </table>
          <!-- /.card-body -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="tutup">
            Done
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="Print('modal_cetak_transaksi')"
          >
            Cetak
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
  props: { id: String, tutup: Function },
  data() {
    return {
      transaksi: {},
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
    Print(element) {
      // var originalContents = document.body.innerHTML;
      var printContent = document.getElementById(element);
      // document.body.innerHTML = printContent;
      // window.print();
      // document.body.innerHTML = originalContents;
      var domClone = printContent.cloneNode(true);

      var $printSection = document.getElementById("printSection");

      if (!$printSection) {
        $printSection = document.createElement("div");
        $printSection.id = "printSection";
        document.body.appendChild($printSection);
      }

      $printSection.innerHTML = "";
      $printSection.appendChild(domClone);
      window.print();
    },
  },
};
</script>

<style>
@media screen {
  #printSection {
    display: none;
  }
}

@media print {
  body * {
    visibility: hidden;
  }
  #printSection,
  #printSection * {
    visibility: visible;
  }
  #printSection {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>