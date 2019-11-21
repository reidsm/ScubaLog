
function editLog(logObject){

    // if the user is authenticated, get this "user" object
    // create this user node(doc) in the datebase users collection
    //use update not set

    firebase.auth().onAuthStateChanged(function(user){
        db.collection("users").doc(user.uid).collection("logs").doc("diqG98OXaeMYQ3bLtXpt").update(logObject); 
    });

}