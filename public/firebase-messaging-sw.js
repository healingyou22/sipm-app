// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyCwtvG8qQ1VPK-t6Yz8vnAHZINP9uPogP8",
  authDomain: "my-awesome-project-9477c.firebaseapp.com",
  databaseURL: "https://my-awesome-project-9477c.firebaseio.com",
  projectId: "my-awesome-project-9477c",
  storageBucket: "my-awesome-project-9477c.appspot.com",
  messagingSenderId: "728190908845",
  appId: "1:728190908845:web:d15c0fa0720e863ed10924",
  measurementId: "G-JYPTL83PP1"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
      "[firebase-messaging-sw.js] Received background message ",
      payload,
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
      body: "Background Message body.",
      icon: "/itwonders-web-logo.png",
  };

  return self.registration.showNotification(
      notificationTitle,
      notificationOptions,
  );
});