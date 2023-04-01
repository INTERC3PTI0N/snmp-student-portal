var firebaseConfig = {
    apiKey: "AIzaSyBxogVMrdgMoibTqBGkYO9x9gSuSFg456E",
    authDomain: "snmp-3eab1.firebaseapp.com",
    projectId: "snmp-3eab1",
    storageBucket: "snmp-3eab1.appspot.com",
    messagingSenderId: "581968628905",
    appId: "1:581968628905:web:dcc1900e993fc004086db8",
    measurementId: "G-7M1ECEJRG6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    var db = firebase.firestore();
    db.settings({
        timestampsInSnapshots: true
    });