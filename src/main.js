import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from "axios";
import firebase from "firebase/app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwtvG8qQ1VPK-t6Yz8vnAHZINP9uPogP8",
  authDomain: "my-awesome-project-9477c.firebaseapp.com",
  databaseURL: "https://my-awesome-project-9477c.firebaseio.com",
  projectId: "my-awesome-project-9477c",
  storageBucket: "my-awesome-project-9477c.appspot.com",
  messagingSenderId: "728190908845",
  appId: "1:728190908845:web:d15c0fa0720e863ed10924",
  measurementId: "G-JYPTL83PP1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user=> {
  console.log(user)
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


