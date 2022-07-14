
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD7M5i5IGeFlZilov1UAuHqZWCnxoN_JrQ",
      authDomain: "kwitter-b074f.firebaseapp.com",
      databaseURL: "https://kwitter-b074f-default-rtdb.firebaseio.com",
      projectId: "kwitter-b074f",
      storageBucket: "kwitter-b074f.appspot.com",
      messagingSenderId: "530024463573",
      appId: "1:530024463573:web:841d5ad6f7951755f4765c"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
