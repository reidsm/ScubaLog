//This script writes the log to the database
<<<<<<< HEAD
function submitform(){
    var f = document.getElementsByTagName('form')[0];
    if(f.checkValidity()){
        f.submit();
        handleSubmit();
    }else{
        alert(document.getElementById('example').validationMessage);
    }
}
function handleSubmit(){
    console.log("HAHA Funny");
=======

function handleSubmit() {
    
>>>>>>> 3a03c54ab6fee3704fe21edd443e3498e4cf5265
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
            
        
        logDate: date
    ,
        logTimeDescended: timeDescended,
        logDepth: depth,
        logLength: length,
        logBuddies: buddies,
        logWeight: weight,
    };

    // send the log object to the script that writes the log to the database
    if (diveSite !== '' && location !== '' && date !== '') {
        createLog(logObject);
    } else {
        console.log("You need to fill in the divesite, location, and date");
    }


    
    
}