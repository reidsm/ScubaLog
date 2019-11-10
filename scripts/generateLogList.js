//This script currently adds a list of scuba dive log records to the home screen.
//It does not yet link to the user's record but it will.

function addLog() {
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

    for (i = 8; i > 0; i--) {

        linkRecord[i] = document.createElement("a");
        linkRecord[i].setAttribute("id", "linkRecord" + i);
        linkRecord[i].setAttribute("href", "./Log.html")
        document.getElementById("logs").appendChild(linkRecord[i]);

        recordTable[i] = document.createElement("table");
        recordTable[i].setAttribute("id", "recordTable" + i);
        recordTable[i].setAttribute("class", "recordTable");
        document.getElementById("linkRecord" + i).appendChild(recordTable[i]);

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
        recordTitle[i].innerHTML = "<b>Ogden Point, Victoria BC</b>";
        document.getElementById("tdRight" + i).appendChild(recordTitle[i]);

        recordDate[i] = document.createElement("div");
        recordDate[i].setAttribute("id", "recordDate" + i);
        recordDate[i].setAttribute("class", "recordDate");
        recordDate[i].innerHTML = "01 June, 2019";
        document.getElementById("tdRight" + i).appendChild(recordDate[i]);

        bottomHr[i] = document.createElement("hr");
        bottomHr[i].setAttribute("id", "bottomHr" + i);
        bottomHr[i].setAttribute("class", "bottomHr");
        document.getElementById("logs").appendChild(bottomHr[i]);
    }
}
addLog();