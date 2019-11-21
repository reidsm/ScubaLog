function createLog(logObject){

    // if the user is authenticated, get this "user" object
    // create this user node(doc) in the datebase users collection
    //use update not set

    firebase.auth().onAuthStateChanged(function(user){
        //add the log object to the user's collection of logs.
        db.collection("users").doc(user.uid).collection("logs").add(logObject);
        
    });

}