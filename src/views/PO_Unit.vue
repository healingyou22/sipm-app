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
                  <h3 class="card-title text-left">Cetak PO Unit</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body text-black text-left">
                  <div class="submit-form">
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Tanggal</label>
                      <div class="col-sm-10">
                        <input
                          type="date"
                          class="form-control"
                          required
                          v-model="dataCust.tanggal"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Nama Customer</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          required
                          v-model="dataCust.nama_cust"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Dealer</label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          required
                          v-model="dataCust.dealer"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label"
                        >Alamat Dealer</label
                      >
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          required
                          v-model="dataCust.alamat_dealer"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="submit-form"
                    v-for="index in jumlahData"
                    :key="`data${index}`"
                  >
                    <h3 class="text-center">Data PO {{ index }}</h3>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Unit Type</label>
                      <div class="col-sm-10">
                        <select
                          class="form-control"
                          aria-label="Default select example"
                          :placeholder="`unit_type-${index}`"
                          :id="`unit_type-${index}`"
                          v-model="input[index - 1].unit_type"
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
                          :placeholder="`warna-${index}`"
                          :id="`warna-${index}`"
                          v-model="input[index - 1].warna"
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
                      <label class="col-sm-2 col-form-label">Tahun</label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          class="form-control"
                          required
                          :placeholder="`tahun-${index}`"
                          :id="`tahun-${index}`"
                          v-model="input[index - 1].tahun"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Jumlah Unit</label>
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          :placeholder="`jumlah_unit-${index}`"
                          :id="`jumlah_unit-${index}`"
                          v-model="input[index - 1].jumlah_unit"
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Harga</label>
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          :placeholder="`harga-${index}`"
                          :id="`harga-${index}`"
                          v-model="input[index - 1].harga"
                        />
                      </div>
                    </div>
                    <!-- <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Harga</label>
                      <div class="col-sm-10">
                        <select
                          class="form-control"
                          aria-label="Default select example"
                          :placeholder="`harga-${index}`"
                          :id="`harga-${index}`"
                          v-model="input[index - 1].harga"
                        >
                          <option value="Harga1">Harga1</option>
                          <option value="Harga1">Harga1</option>
                          <option value="Harga1">Harga1</option>
                          <option value="Harga1">Harga1</option>
                          <option value="Harga1">Harga1</option>
                          <option value="Harga1">Harga1</option>
                          <option value="Harga1">Harga1</option>
                          <option value="Harga1">Harga1</option>
                          <option value="Harga1">Harga1</option>
                        </select>
                      </div>
                    </div> -->
                    <!-- <div class="mb-3 row">
                      <label class="col-sm-2 col-form-label">Total</label>
                      <div class="col-sm-10">
                        <input
                          type="number"
                          class="form-control"
                          required
                          :placeholder="`total-${index}`"
                          :id="`total-${index}`"
                          v-model="input[index - 1].total"
                        />
                      </div>
                    </div> -->
                  </div>
                  <button
                    class="btn btn-primary"
                    type="button"
                    @click="tambahData()"
                  >
                    Tambah Data
                  </button>
                  <div class="submit-form">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button
                        class="btn btn-danger me-md-2"
                        type="button"
                        @click="back()"
                      >
                        Batal
                      </button>

                      <button
                        class="btn btn-success"
                        type="button"
                        @click="openModal"
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

    <ModalCetakPO
      v-if="isModalOpen"
      :dataUnit="input"
      :dataCust="dataCust"
      :closeModal="closeModal"
    />
  </div>
  <!-- End of Content Wrapper -->
</template>

<script>
import ModalCetakPO from "../components/ModalCetak";
import Navbar from "../components/Navbar";
export default {
  components: { Navbar, ModalCetakPO },
  data() {
    return {
      jumlahData: 1,
      input: [
        {
          unit_type: "",
          warna: "",
          tahun: "",
          jumlah_unit: "",
          harga: "",
        },
      ],
      isModalOpen: false,
      dataCust: {
        tanggal: "",
        nama_cust: "",
        dealer: "",
        alamat_dealer: "",
      },
    };
  },
  methods: {
    tambahData() {
      this.jumlahData += 1;
      this.input.push({
        unit_type: "",
        warna: "",
        tahun: "",
        jumlah_unit: "",
        harga: "",
      });
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style>
</style>