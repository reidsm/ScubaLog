//This script currently adds a list of scuba dive log records to the home screen.
//It does not yet link to the user's record but it will.

//COPY THIS FUNCTION FOR A PROMISE (LINES 5 - 24)
firebase.auth().onAuthStateChanged(function (user) {
    var recordArray = [];
    console.log("this is the user", user.uid);

    if (user) {
        //you can change line 10 to get at the data you want
        db.collection("users").doc(user.uid).collection("logs").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) { //forEach iterates over the 
                //your code goes here (12-17)
                //creating a json object
                console.log(doc.id);
                var record = { //variable declaration for a record object
                    date: doc.data()['logDate'], //change the string in the square brackets to change the data you want
                    site: doc.data()['logDiveSite'],
                    place: doc.data()['logLocation'],
                    docID: doc.id
                };
                recordArray.push(record); //adds the object to the array
            });
            addLog(recordArray); //chain logic has to start within the promise 
        });
    } else {
        console.log("This code should be unreachable. The funny thing is I feel like someone will see this message one day. I'm sorry. -S");
    }
});
//This function adds the log to main.html
function addLog(recordArray) {
    //console.log(recordArray);
    //This is a sorting algorithm. We could have used .orderBy() here, but we were not aware of this
    //option when we wrote the logic for this page.
    recordArray = recordArray.sort(function (a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);

        if (dateA < dateB) {
            return -1;
        }
        if (dateA > dateB) {
            return 1;
        }
        return 0;
    });
   
    
  
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   
    var topHr = [];
    var recordTable = [];
    var recordTr = [];
    var tdLeft = [];
    var tdRight = [];
    var divCirc = [];
    var circNum = [];
    var recordTitle = [];
    var recordDate = [];
    var bottomHr = [];
    var linkRecord = [];

    var topHr = document.createElement("hr");
    topHr.setAttribute("id", "topHrBase");
    topHr.setAttribute("class", "topHr");
    document.getElementById("logs").appendChild(topHr);

    for (i = recordArray.length; i > 0; i--) {

        linkRecord[i] = document.createElement("a");
        linkRecord[i].setAttribute("id", recordArray[i - 1]['docID']);
        linkRecord[i].setAttribute("href", "./editscreen.html?" + recordArray[i - 1]['docID']);
        document.getElementById("logs").appendChild(linkRecord[i]);

        recordTable[i] = document.createElement("table");
        recordTable[i].setAttribute("id", "recordTable" + i);
        //from the unreal@coldmail.com user, password utah1944 id H0qhSaaOXDa2VtcPKM0nQBjc3W92
        // recordTable[i].setAttribute("data", recordArray[i - 1]['docID']);
        recordTable[i].setAttribute("class", "recordTable");
        document.getElementById(recordArray[i - 1]['docID']).appendChild(recordTable[i]);

        recordTr[i] = document.createElement("tr");
        recordTr[i].setAttribute("id", "recordTr" + i);
        recordTr[i].setAttribute("class", "recordTr");
        document.getElementById("recordTable" + i).appendChild(recordTr[i]);

        tdLeft[i] = document.createElement("td");
        tdLeft[i].setAttribute("id", "tdLeft" + i);
        tdLeft[i].setAttribute("class", "tdLeft");
        document.getElementById("recordTr" + i).appendChild(tdLeft[i]);

        tdRight[i] = document.createElement("td");
        tdRight[i].setAttribute("id", "tdRight" + i);
        tdRight[i].setAttribute("class", "tdRight");
        document.getElementById("recordTr" + i).appendChild(tdRight[i]);

        divCirc[i] = document.createElement("div");
        divCirc[i].setAttribute("id", "divCirc" + i);
        divCirc[i].setAttribute("class", "divCirc");
        document.getElementById("tdLeft" + i).appendChild(divCirc[i]);

        circNum[i] = document.createElement("p");
        circNum[i].setAttribute("id", "circNum" + i);
        circNum[i].setAttribute("class", "circNum");
        circNum[i].innerHTML = "<b>" + i + "</b>";
        document.getElementById("divCirc" + i).appendChild(circNum[i]);

        recordTitle[i] = document.createElement("div");
        recordTitle[i].setAttribute("id", "recordTitle" + i);
        recordTitle[i].setAttribute("class", "recordTitle");
        recordTitle[i].innerHTML = "<b>" + recordArray[i - 1]['site'] + ", " + recordArray[i - 1]['place'] + "</b>";
        document.getElementById("tdRight" + i).appendChild(recordTitle[i]);

        recordDate[i] = document.createElement("div");
        recordDate[i].setAttribute("id", "recordDate" + i);
        recordDate[i].setAttribute("class", "recordDate");

        var oneDate = new Date(recordArray[i - 1]['date']);
        var oneDatePlusOne = oneDate.setDate(oneDate.getDate() + 1);
        var oneDateObject = new Date(oneDatePlusOne);
        var dd = oneDateObject.getDate();
        var mm = oneDateObject.getMonth();
        var yyyy = oneDateObject.getFullYear();
 
        recordDate[i].innerHTML = "" + " " + dd + " " + months[mm] + ", " + yyyy;
        document.getElementById("tdRight" + i).appendChild(recordDate[i]);

        bottomHr[i] = document.createElement("hr");
        bottomHr[i].setAttribute("id", "bottomHr" + i);
        bottomHr[i].setAttribute("class", "bottomHr");
        document.getElementById("logs").appendChild(bottomHr[i]);
    }
}
