const currentDate = new Date(Date.now());
var dd = String(currentDate.getDate()).padStart(2, '0');
var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = currentDate.getFullYear();
var dateString =  mm+"/"+dd+"/"+yyyy+ ", " + noMilitary(currentDate.getHours()) + ":" +appendAMPM(currentDate.getHours(),currentDate.getMinutes())+"";




console.log(mm + "/" + dd + "/" +yyyy + " " + " " + currentDate.getHours() + ":" +currentDate.getMinutes());

document.getElementById("currentDate").innerHTML = dateString

function appendAMPM(hour,minutes) {
    if (minutes <10) minutes="0"+minutes;
    if (hour >= 12) return minutes+"PM";
    else return minutes+"AM";
}

function noMilitary(milTime) {
    if (milTime == 0 || milTime ==24) return milTime+12;
    if (milTime <= 12) return milTime;
    if (milTime >12) return milTime-12;
}

var tablePPF = document.getElementsByClassName("NFF");
var idsToChange = [];
console.log(tablePPF);
for (var i = 0; i < tablePPF.length; i++) {
    console.log(tablePPF[i].id + " " + noMilitary(currentDate.getHours()));
    console.log(parseInt(tablePPF[i].id)+12 + " " +tablePPF[i].parentElement.children[0].innerHTML.includes("PM"));
    if (tablePPF[i].id == noMilitary(currentDate.getHours())) {
        // set class to present
        tablePPF[i].classList.replace("default","present");
        continue;
    }


    if ((tablePPF[i].parentElement.children[0].innerHTML.includes("PM") ? parseInt(tablePPF[i].id)+12: tablePPF[i].id) < ((dateString.includes("PM") ? noMilitary(currentDate.getHours())+12 : noMilitary(currentDate.getHours()) ))) {
        // set class to past
        tablePPF[i].classList.replace("default","past");
    }
    if ((tablePPF[i].parentElement.children[0].innerHTML.includes("PM") ? parseInt(tablePPF[i].id)+12: tablePPF[i].id) > ((dateString.includes("PM") ? noMilitary(currentDate.getHours())+12 : noMilitary(currentDate.getHours()) ))) {
        // set class to past
        tablePPF[i].classList.replace("default","future");
    }
    // if (parseInt(tablePPF[i].id)+12 > ((dateString.includes("PM") ? noMilitary(currentDate.getHours())+12 : noMilitary(currentDate.getHours()) ))) {
    //      // set class to future
    //     tablePPF[i].classList.replace("default","future");
    // }
    // console.log(sdx[i].id);
}