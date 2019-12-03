//this method creates the log once a user submits their logs via submit button
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
}
