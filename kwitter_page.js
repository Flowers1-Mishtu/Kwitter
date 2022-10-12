//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDkk3juo5MRLD1Kkp5lZYuUMLAOgW70Kok",
      authDomain: "kwitter-1314d.firebaseapp.com",
      databaseURL: "https://kwitter-1314d-default-rtdb.firebaseio.com",
      projectId: "kwitter-1314d",
      storageBucket: "kwitter-1314d.appspot.com",
      messagingSenderId: "457056388748",
      appId: "1:457056388748:web:32cd4dbf5d5f55912e5da9",
      measurementId: "G-TRC179QP6D"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name=localStorage.getItem("user_name");
     room_name=localStorage.getItem("room_name");
     
     function send()
     {
      msg= document.getElementById("msg").value;
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
