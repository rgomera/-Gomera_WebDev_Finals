
// Username must be &lt;= 8 characters
// Password must be &lt;= 10 characters
// First name must not contain numbers
// Last name must not contain numbers
// Tel# must not contain alpahets
// Display name must be &lt;= 6 characters


const form = document.getElementById("form");
const username = document.getElementById("txtUsername");
const password = document.getElementById("fldPassword");
const fname = document.getElementById("txtFname");
const lname = document.getElementById("txtLname");
const telnum = document.getElementById("fldTel");
const dname = document.getElementById("textDname");
const gender = document.getElementById("radioGender");

let validformCount = 0;

form.addEventListener('submit', (e) => {

    var letters = /[A-Za-z]+$/;
    var number = /^[0-9]+$/;
    
        
    if(username.value.length > 8 ) {
        e.preventDefault();
        document.getElementById("username-em").innerHTML = "Username must be &lt;= 8 characters";
        username.style.border = "solid 2px #e97272";
    }
    else {
        username.style.border = "solid 2px #8de6af";
        document.getElementById("username-em").innerHTML = "";
    }

    if(password.value.length > 10) {
        e.preventDefault();
        document.getElementById("password-em").innerHTML = "Password must be &lt;= 10 characters";
        password.style.border = "solid 2px #e97272";
    }
    else {
        password.style.border = "solid 2px #8de6af";
        document.getElementById("password-em").innerHTML = "";
    }

    if((!fname.value.match(letters))) {
        e.preventDefault();
        document.getElementById("fname-em").innerHTML = "First name must not contain number";
        fname.style.border = "solid 2px #e97272";
    }
    else {
        fname.style.border = "solid 2px #8de6af";
        document.getElementById("fname-em").innerHTML = "";
    }

    if((!lname.value.match(letters))) {
        e.preventDefault();
        document.getElementById("lname-em").innerHTML = "Last name must not contain number";
        lname.style.border = "solid 2px #e97272";
    }
    else {
        lname.style.border = "solid 2px #8de6af";
        document.getElementById("lname-em").innerHTML = "";
    }

    if((!telnum.value.match(number))) {
        e.preventDefault();
        document.getElementById("telnum-em").innerHTML = "Telphone# must not contain alphabet";
        telnum.style.border = "solid 2px #e97272";
    }
    else {
        telnum.style.border = "solid 2px #8de6af";
        document.getElementById("telnum-em").innerHTML = "";
    }

    if(dname.value.length > 6) {
        e.preventDefault();
        document.getElementById("dname-em").innerHTML = "Display Name must be &lt;= 6 characters";
        dname.style.border = "solid 2px #e97272";
    }
    else {
        dname.style.border = "solid 2px #8de6af";
        document.getElementById("dname-em").innerHTML = "";
    }
});




