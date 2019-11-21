function onLoad() {
    //var diveSite = document.getElementById('diveSite');

    firebase.auth().onAuthStateChanged(function(user){
        db.collection("users").doc(user.uid).collection("logs").doc("diqG98OXaeMYQ3bLtXpt").onSnapshot(function (doc) {
            // diveSiteCurrent = doc.data();
            console.log(doc.data().logDiveSite);
            document.getElementById('diveSite').value = doc.data().logDiveSite;
            document.getElementById('location').value = doc.data().logLocation;
            document.getElementById('date').value = doc.data().logDate;
            document.getElementById('timeDescended').value = doc.data().logTimeDescended;
            document.getElementById('depth').value = doc.data().logDepth;
            document.getElementById('length').value = doc.data().logLength;
            document.getElementById('buddies').value = doc.data().logBuddies;
            document.getElementById('totalWeight').value = doc.data().logWeight;
    });

    
    //diveSite.value = diveSiteCurrent;
});
// console.log(diveSiteCurrent);
}

function handleEdit() {
//This script writes the log to the database

    var diveSite = document.getElementById('diveSite').value;
    var location = document.getElementById('location').value;
    var date = document.getElementById('date').value;
    var timeDescended = document.getElementById('timeDescended').value;
    
    var depth = document.getElementById('depth').value;
    var length = document.getElementById('length').value;
    var buddies = document.getElementById('buddies').value;
    var weight = document.getElementById('totalWeight').value;
    // var buoyancyControl = document.getElementById('buoyancy').value; TODO make this work
    
    var logObject = {
        logDiveSite: diveSite,
        logLocation: location,
        logDate: date,
        logTimeDescended: timeDescended,
        logDepth: depth,
        logLength: length,
        logBuddies: buddies,
        logWeight: weight,
    };

    editLog(logObject);
    
}


    
