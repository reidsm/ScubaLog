function createLog(logObject){

    // if the user is authenticated, get this "user" object
    // create this user node(doc) in the datebase users collection
    //use update not set
    console.log("console log is running");
    firebase.auth().onAuthStateChanged(function(user){
        //add the log object to the user's collection of logs.
        db.collection("users").doc(user.uid).collection("logs").add(logObject).then(function() {
            window.location.href="main.html";
        }).catch(function(error){
            console.log("there was an error");
        });
    });
    
    // var promise = new Promise(function(resolve, reject) {
    //     // do a thing, possibly async, then…
      
    //     firebase.auth().onAuthStateChanged(function(user){
    //         //add the log object to the user's collection of logs.
    //         db.collection("users").doc(user.uid).collection("logs").add(logObject);
    //     });

    //     if (/* everything turned out fine */) {
    //       resolve("Stuff worked!");
    //     }
    //     else {
    //       reject(Error("It broke"));
    //     }
    //   });

    //   promise.then(function(result) {
    //     window.location.href="index.html";
    //     console.log(result); // "Stuff worked!"
    //   }, function(err) {
    //     console.log(err); // Error: "It broke"
    //   });


}

//.then(function() {
    // window.location.href="index.html";