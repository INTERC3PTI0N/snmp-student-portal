var loginpage = document.getElementById("login-page");

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("loginform").style.display="none";
      change();
      window.location.href="pages/index.html";
    } else {
      // No user is signed in.
      document.getElementById("loginform").style.display="block";

    }
  });

loginform.addEventListener('submit',(e) =>{
  e.preventDefault();
  var userEmail = document.getElementById("user").value;
    var userPass = document.getElementById("pass").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
});

  function logout(){
    firebase.auth().signOut();
  }

function change(){
  var user = firebase.auth().currentUser;

user.updateProfile({
  photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
  }


// The app only has access as defined in the Security Rules
/*var db = firebase.database();
var ref = db.ref("/text");
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
});
*/
var dbref = firebase.database().ref();
var somevalue = "hello"
dbref.child("text").set(somevalue);