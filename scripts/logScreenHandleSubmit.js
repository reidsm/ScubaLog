//This script writes the log to the database

function handleSubmit(){
    //gather up the data fields
    var diveSite = document.getElementById('diveSite').value;
    var location = document.getElementById('location').value;
    var date = document.getElementById('date').value;
    var timeDescended = document.getElementById('timeDescended').value;
    
    var depth = document.getElementById('depth').value;
    var length = document.getElementById('length').value;
    var buddies = document.getElementById('buddies').value;
    var weight = document.getElementById('totalWeight').value;
    // var buoyancyControl = document.getElementById('buoyancy').value; TODO make this work
    
    //make an object out of the data from the form fields
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

    //send the log object to the script that writes the log to the database
    createLog(logObject);
}