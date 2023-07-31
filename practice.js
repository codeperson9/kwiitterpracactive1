
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyA4r2kERDpvvYfE65OidhxlpD19y5NBGhg",
    authDomain: "kwitter-6d5ec.firebaseapp.com",
    databaseURL: "https://kwitter-6d5ec-default-rtdb.firebaseio.com",
    projectId: "kwitter-6d5ec",
    storageBucket: "kwitter-6d5ec.appspot.com",
    messagingSenderId: "162098061754",
    appId: "1:162098061754:web:0281699c2bf2ca49833d83"
  };
  firebase.initializeApp(firebaseConfig);



  function addUser() 
  {

user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose : "adding user"

});

  }












