var myUser = null;

function createUser(){

    // if the user is authenticated, get this "user" object
    // create this user node(doc) in the datebase users collection

    firebase.auth().onAuthStateChanged(function(user){
        myUser = user;
        db.collection("users").doc(user.uid).set( //this is creating a new collection called users
		{
        "name":user.displayName, 
         "email":user.email,
        }, {merge: true});
    });

}