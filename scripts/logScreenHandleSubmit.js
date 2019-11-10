//This script writes the log to the database

function handleSubmit(){
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

    createLog(logObject);
    
}