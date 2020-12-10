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
          <h5 class="modal-title" id="ModalCetakLabel">Cetak Data</h5>
          <a
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
          >
            <span aria-hidden="true">×</span>
          </a>
        </div>
        <div class="modal-body" id="modal_cetak_po">
          <h5 class="text-center">PERMINTAAN PEMBELIAN</h5>
          <h5 class="text-center">PURCHASE ORDER</h5>
          <br />
          <table>
            <tbody>
              <tr class="text-left">
                <td><label>KEPADA</label></td>
                <td><label> : </label></td>
                <td>
                  <label id="cetak_nama_cust">{{ dataCust.nama_cust }}</label>
                </td>
              </tr>
              <tr class="text-left">
                <td><label>DARI DEALER</label></td>
                <td><label>:</label></td>
                <td>
                  <label id="cetak_dealer">{{ dataCust.dealer }}</label>
                </td>
              </tr>
              <tr class="text-left">
                <td><label>ALAMAT</label></td>
                <td><label> : </label></td>
                <td>
                  <label id="cetak_alamat_dealer">{{
                    dataCust.alamat_dealer
                  }}</label>
                </td>
              </tr>
            </tbody>
          </table>
          <h6 style="color: black" class="text-left">
            Bersama ini kami memesan unit - unit sepeda motor dengan pembayaran
            sbb :
          </h6>
          <table class="table table-bordered text-center">
            <tbody>
              <tr>
                <th>Type</th>
                <th>Warna</th>
                <th>Tahun</th>
                <th>Jumlah</th>
                <th>Harga</th>
                <th>Total</th>
              </tr>
              <tr v-for="(data, index) in dataUnit" :key="data + index">
                <td>
                  <label id="cetak_unit_type1">{{ data.unit_type }}</label>
                </td>
                <td>
                  <label id="cetak_warna1">{{ data.warna }}</label>
                </td>
                <td><label id="cetak_tahun1"></label>{{ data.tahun }}</td>
                <td>
                  <label id="cetak_jml_unit1"></label>{{ data.jumlah_unit }}
                </td>
                <td>
                  <label id="cetak_harga1"> {{ data.harga }}</label>
                </td>
                <td>
                  <label id="cetak_total1">{{ totalHarga(index) }}</label>
                </td>
              </tr>
              <tr>
                <th colspan="3">Total</th>
                <td>
                  <label id="cetak_total_jumlah">{{ totalJumlah }}</label>
                </td>
                <td></td>
                <td>
                  <label id="cetak_total_harga">{{ totalAkhir }}</label>
                </td>
              </tr>
            </tbody>
          </table>
          <h6 style="color: black" class="text-left">
            Kami akan menyelesaikan pembayaran sesuai dengan ketentuan yang
            berlaku.
          </h6>
          <table>
            <tbody>
              <tr class="text-left">
                <td><label>Tanggal</label></td>
                <td><label> : </label></td>
                <td>
                  <label id="cetak_tanggal">{{ dataCust.tanggal }}</label>
                </td>
              </tr>
              <tr class="text-left">
                <td><label>Disetujui</label></td>
                <td><label>:</label></td>
                <td width="290"><label></label></td>
                <td width="450"><label></label></td>
                <td><label>Pemilik / Kuasa Dealer</label></td>
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
                <td><label></label></td>
                <td><label></label></td>
              </tr>
              <tr>
                <td><label></label></td>
                <td><label></label></td>
                <td width="290"><label></label></td>
                <td width="450"><label></label></td>
                <td><label>Niki</label></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button class="btn btn-danger" type="button" @click="closeModal">
            Batal
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="Print('modal_cetak_po')"
          >
            Cetak
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { dataCust: Object, dataUnit: Array, closeModal: Function },
  computed: {
    totalJumlah() {
      var total_jumlah = 0;

      for (var i = 0; i < this.dataUnit.length; i++) {
        if (isNaN(this.dataUnit[i].jumlah_unit)) {
          continue;
        }
        total_jumlah += parseInt(this.dataUnit[i].jumlah_unit);
      }

      return total_jumlah;
    },
    totalAkhir() {
      var total_akhir = 0;

      for (var i = 0; i < this.total_harga.length; i++) {
        total_akhir += this.total_harga[i];
      }

      return total_akhir;
    },
  },
  data() {
    return {
      jml_unit: "",
      harga: "",
      total_harga: [],
    };
  },
  methods: {
    Print(element) {
      var printContent = document.getElementById(element);
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
    totalHarga(index) {
      this.total_harga[index] =
        parseInt(this.dataUnit[index].jumlah_unit) *
        parseInt(this.dataUnit[index].harga);

      return this.total_harga[index];
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
    width: 100%;
    left: 0;
    top: 0;
  }
}
</style>