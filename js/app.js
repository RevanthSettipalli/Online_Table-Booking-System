let isRegister = true;

// TOGGLE LOGIN / REGISTER

function toggleAuth(){

const title =
document.getElementById("authTitle");

const submit =
document.querySelector("#authForm button");

const text =
document.getElementById("authToggleText");

if(isRegister){

title.innerHTML="Login";

submit.innerHTML="Login";

text.innerHTML="Don't have account?";

}
else{

title.innerHTML="Register";

submit.innerHTML="Register";

text.innerHTML="Already have account?";

}

isRegister=!isRegister;

}



// LOGIN FORM

document
.getElementById("authForm")

.addEventListener(

"submit",

function(e){

e.preventDefault();

if(isRegister){

alert(
"Registration Successful → Login"
);

toggleAuth();

return;

}

document
.getElementById("auth")
.style.display="none";

document
.getElementById("mainWebsite")
.classList.remove("hidden");

showHome();

}

);




// SHOW HOME

function showHome(){

document
.getElementById("home")
.style.display="flex";

document
.getElementById("booking")
.style.display="none";

document
.getElementById("thankyou")
.style.display="none";

}



// BOOK NOW

document
.addEventListener(

"DOMContentLoaded",

()=>{

const book=
document.getElementById(
"bookBtn"
);

if(book){

book.onclick=()=>{

document
.getElementById(
"home"
)
.style.display=
"none";

document
.getElementById(
"booking"
)
.style.display=
"block";

// CLEAR OLD VALUES

document
.getElementById(
"bookingForm"
)
.reset();

};

}

}

);




// BOOKING

document
.getElementById(
"bookingForm"
)

.addEventListener(

"submit",

function(e){

e.preventDefault();

alert(
"✅ Table Booked Successfully"
);

// CLEAR FORM

this.reset();

// SHOW CONFIRM

document
.getElementById(
"booking"
)
.style.display=
"none";

document
.getElementById(
"thankyou"
)
.style.display=
"flex";

}

);




// HOME BUTTON

function goHome(){

document
.getElementById(
"thankyou"
)
.style.display=
"none";

document
.getElementById(
"home"
)
.style.display=
"flex";

}