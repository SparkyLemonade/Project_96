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

  //getUsername

  username = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome" + username + "!";

  //AddRoom()

  function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }

  //getData()

  function getData() 
  {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
//Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.is)' >#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row; 
//End code
});});}
getData();

//redirectToRoomName()

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function Logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}