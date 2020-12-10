<template>
  <div>
    <div v-for="n in jumlahHalo" :key="`halo${n}`">
      <input
        :placeholder="`warna-${n}`"
        :id="`warna-${n}`"
        v-model="input[n - 1].warna"
      />
      <input
        :placeholder="`harga-${n}`"
        :id="`harga-${n}`"
        v-model="input[n - 1].harga"
      />
    </div>

    <button @click="tambahHalo">tambah halo</button>
    <button @click="openModal">cek</button>

    <ModalCetak v-if="isModalOpen" :dataUnit="input" :closeModal="closeModal" />
  </div>
  <!-- v-if="jumlahHalo < 3" -->
</template>

<script>
import ModalCetak from "../components/ModalCetak";
export default {
  components: { ModalCetak },
  data() {
    return {
      jumlahHalo: 1,
      input: [
        {
          warna: "",
          harga: "",
        },
      ],
      isModalOpen: false,
    };
  },
  methods: {
    tambahHalo() {
      // if (this.jumlahHalo < 3) {

      // }
      this.jumlahHalo += 1;
      this.input.push({
        warna: "",
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