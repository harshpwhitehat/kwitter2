
var firebaseConfig = {
  apiKey: "AIzaSyB3gxjb4EIbcQLrcTf95RgdQAdBkQVNgP4",
  authDomain: "kwitter-d16bc.firebaseapp.com",
  databaseURL: "https://kwitter-d16bc-default-rtdb.firebaseio.com",
  projectId: "kwitter-d16bc",
  storageBucket: "kwitter-d16bc.appspot.com",
  messagingSenderId: "768139350263",
  appId: "1:768139350263:web:a8102783e3b04f74e503f2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function add_user(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";


}