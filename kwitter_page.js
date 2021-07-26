//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyD3j7BVloZlpc0QtjMULvMeZ7nyu_C5DTE",
    authDomain: "practice-project-2e868.firebaseapp.com",
    databaseURL: "https://practice-project-2e868-default-rtdb.firebaseio.com",
    projectId: "practice-project-2e868",
    storageBucket: "practice-project-2e868.appspot.com",
    messagingSenderId: "223896732430",
    appId: "1:223896732430:web:2e03c5e93e89f9315ccd5f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function Send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
      document.getElementById("msg").value="";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("Kwitter_login.html");
}