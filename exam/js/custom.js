
var roomCodeInput = document.getElementById("roomCode-input");

function joinRoom() {
    if(roomCodeInput.value == "") {
        alert("You need to enter collaboration room's code to enter the collabotation !!")
    }
    else {
        location.href = "Collaboration_join_room.html";
    }
}

const adminUser = document.getElementById("txtusername");
const adminPass = document.getElementById("fldpass");

function openMemberList() {
    if(adminUser.value == "admin" && adminPass.value == "admin") {
        window.open("Members_page.html"); 
    }
    else {
        alert("Incorrect Credentials!!");
    }
}