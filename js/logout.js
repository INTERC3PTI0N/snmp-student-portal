// Your web app's Firebase configuration

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var userid=user.uid;
      var nam = user.displayName;
      appt(userid, nam);
    } else {
      // No user is signed in.
      /*window.location.replace("http://127.0.0.1:5500/login.html");*/
      window.location.href = "../login.html";

    }
  });

$("#loggedclick").on('click', function() {
    firebase.auth().signOut()
  .then(function() {
    // Sign-out successful.
  })
  .catch(function(error) {
    // An error happened
    window.alert("Error:"+error);
  });
  })


