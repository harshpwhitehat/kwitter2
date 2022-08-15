//YOUR FIREBASE LINKS
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

    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value=" ";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

      console.log(firebase_message_id);
      console.log(message_data);
      name=message_data['name'];
      messege=message_data['messege'];
      like=message_data['like'];
      name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag="<h4 class='messege_h4'>"+message+"</h4>";
      like_button="button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='updateLike(this.id)'> ";
      span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span> </button> <hr>";
      row=name_with_tag+message_with_tag+like_button+span_with_tag;
      document.getElementById("output").innerHTML+=row;


//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button.-"+message_id);
       button_id=message_id;
      likes=document.getElementById(button_id).value;
      update_likes=Number(likes)+1;
      console.log(update_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
