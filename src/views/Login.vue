<template>
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-xl-5">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">SIPM Suzuki</h1>
                  </div>
                  <form @submit.prevent="pressed">
                    <div class="form-group">
                      <div class="login">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="auth-email"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          v-model="email"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="password">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="auth-password"
                          placeholder="Password"
                          v-model="password"
                        />
                      </div>
                    </div>
                    <hr />
                    <button class="btn btn-primary btn-user btn-block">
                      Login
                    </button>
                  </form>
                  <div class="error" v-if="error">{{ error.message }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
require("firebase/auth");

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async pressed() {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        this.$router.push({ name: "Dashboard" });
      } catch (err) {
        console.log(err);
      }
    },
    // fcmPermission() {
    //   var fcm = firebase.messaging();
    //   var db = firebase.database();
    //   var auth = firebase.auth();

    //   fcm
    //     .requestPermission()
    //     .then(() => fcm.getToken())
    //     .then((token) => {
    //       console.log(token);

    //       db.ref("/tokens").push({
    //         token: token,
    //         uid: auth.currentUser.uid,
    //       });
    //     })
    //     .catch(() => console.log("user didnt give permission"));
    // },
  },
};
</script>

<style lang="scss">
body {
  background-color: #182952;
}
</style>