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
document.getElementById("user_name").innerHTML="Welcome "+ user_name+ "!!!!!!!";

function addRoom()
{
room_name= document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class= 'room_name' id= "+Room_names+" onclick='redirectToRoomname(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomname(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}