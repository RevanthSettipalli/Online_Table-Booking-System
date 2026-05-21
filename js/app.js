// LOGIN / REGISTER

const auth =
document.getElementById("auth");

const website =
document.getElementById("mainWebsite");

const authForm =
document.getElementById("authForm");

let login=false;



function toggleAuth(){

login=!login;

const title=
document.getElementById("authTitle");

const button=
document.querySelector(
"#authForm button"
);

const text=
document.getElementById(
"authToggleText"
);

if(login){

title.innerText="Login";

button.innerText="Login";

text.innerText=
"New User?";

}

else{

title.innerText=
"Register";

button.innerText=
"Register";

text.innerText=
"Already have account?";

}

}



// LOGIN

authForm.addEventListener(

"submit",

function(e){

e.preventDefault();

if(!login){

alert(
"Registration Successful → Login"
);

toggleAuth();

return;

}

auth.style.display=
"none";

website.classList.remove(
"hidden"
);

showHome();

}

);




// HOME

function showHome(){

document.querySelector(
".hero"
).style.display="flex";

document.getElementById(
"booking"
).style.display="none";

document.getElementById(
"thankyou"
).style.display="none";

}



// BOOK NOW BUTTON

function showBooking(){

document.querySelector(
".hero"
).style.display=
"none";

document.getElementById(
"booking"
).style.display=
"flex";

document.getElementById(
"bookingForm"
).reset();

}




// RESERVE

document
.getElementById(
"bookingForm"
)

.addEventListener(

"submit",

function(e){

e.preventDefault();

alert(
"✅ Table Booked"
);

this.reset();

document.getElementById(
"booking"
).style.display=
"none";

document.getElementById(
"thankyou"
).style.display=
"flex";

}

);




// BACK HOME

function goHome(){

document.getElementById(
"thankyou"
).style.display=
"none";

showHome();

}