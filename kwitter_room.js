
//ADD YOUR FIREBASE LINKS HERE
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

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function add_room(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(dis.id)'>#"+room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setitem("room_name",name);
      window.location = "kwitter_page.html";

}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}