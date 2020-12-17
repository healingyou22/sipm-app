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
                  <h3 class="card-title text-left">History Notification</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body table-responsive">
                  <table
                    id="tabel-hist_notification"
                    class="table table-bordered"
                    style="color: black"
                  >
                    <thead class="thead-dark text-center">
                      <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>User</th>
                        <th>Message</th>
                      </tr>
                    </thead>
                    <tbody
                      style="background-color: #f6f6f6"
                      class="text-center"
                    >
                      <tr v-for="data in notifications" :key="data.id">
                        <th>{{ data.date }}</th>
                        <th>{{ data.time }}</th>
                        <th>{{ data.user }}</th>
                        <th class="text-left">{{ data.message }}</th>
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
  </div>
  <!-- End of Content Wrapper -->
</template>

<script>
import firebase from "firebase";
require("firebase/auth");
require("firebase/database");
import Navbar from "../components/Navbar";
export default {
  components: {
    Navbar,
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

    if (Notification.permission === "granted") {
      // showNotification();
      console.log(Notification.permission);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          // showNotification();
          console.log(Notification.permission);
        }
      });
    }

    const db = firebase.database().ref("notifications");
    db.on("value", this.resultData, this.errorData);
  },
  data() {
    return {
      loggedIn: false,
      notifications: [],
      user: {},
      checkUser: "",
      caridate: "",
    };
  },
  methods: {
    resultData(items) {
      this.notifications = [];

      items.forEach((item) => {
        let data = {
          id: item.key,
          date: item.val().date,
          time: item.val().time,
          user: item.val().user,
          message: item.val().message,
        };
        this.notifications.push(data);
      });
    },
    errorData(error) {
      console.log(error);
    },
  },
};
</script>

<style>
</style>