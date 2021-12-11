//Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_DPdjlxy_nC4cxajVk7SGjZGXSA02_zU",
    authDomain: "kwitter-e4c0f.firebaseapp.com",
    projectId: "kwitter-e4c0f",
    databaseURL: "https://kwitter-e4c0f-default-rtdb.firebaseio.com",
    storageBucket: "kwitter-e4c0f.appspot.com",
    messagingSenderId: "269338075287",
    appId: "1:269338075287:web:3faf738c4bdd863f8589d2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  //send()

  function send() {
      msg = document.getElementById("msg_input").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });

      document.getElementById("msg").value = "";
  }

  function Logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }