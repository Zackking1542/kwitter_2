
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDV5-uhNV2ZmhafBKJeZuqnCTM7gVD1WPU",
      authDomain: "classtest-63e68.firebaseapp.com",
      databaseURL: "https://classtest-63e68-default-rtdb.firebaseio.com",
      projectId: "classtest-63e68",
      storageBucket: "classtest-63e68.appspot.com",
      messagingSenderId: "1098228136415",
      appId: "1:1098228136415:web:edd0ccfb64a23cb3b9ac6a"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
