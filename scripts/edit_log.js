//This function gets called once a user edits a log. 
//It updates all the field's information.
function editLog(logObject){

    // if the user is authenticated, get this "user" object
    // create this user node(doc) in the datebase users collection
    //use update not set

    firebase.auth().onAuthStateChanged(function(user){
        console.log(get_div_id());
        var url = get_div_id();
        db.collection("users").doc(user.uid).collection("logs").doc(url).update(logObject).then(function(){ 
        window.location.href="main.html";
        }).catch(function(error){
            console.log("there was an error");
        }); 
    });

}

//This function gets the url of editscreen.html to autofill the correct information.
function get_div_id(){
    var url = window.location.search;
    url = url.replace("?", '');
    console.log(url);
    return url;
}