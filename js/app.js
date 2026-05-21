const auth=
document.getElementById(
"auth"
);

const main=
document.getElementById(
"mainWebsite"
);

const authForm=
document.getElementById(
"authForm"
);

let login=false;



function toggleAuth(){

login=!login;

document
.getElementById(
"authTitle"
)

.innerText=

login
?
"Login"
:
"Register";

document
.getElementById(
"submitBtn"
)

.innerText=

login
?
"Login"
:
"Register";

document
.getElementById(
"authText"
)

.innerText=

login
?
"New User?"
:
"Already have account?";

}



authForm.addEventListener(

"submit",

(e)=>{

e.preventDefault();

if(!login){

alert(
"Registration Successful → Login"
);

toggleAuth();

return;

}

auth.style.display="none";

main.classList.remove(
"hidden"
);

showSection(
"home"
);

}

);



function showSection(id){

document
.querySelectorAll(
".section-container"
)

.forEach(

x=>{

x.style.display=
"none";

}

);

document
.getElementById(
id
)

.style.display=
"block";

}



document
.getElementById(
"bookingForm"
)

.addEventListener(

"submit",

(e)=>{

e.preventDefault();

alert(
"✅ Table Booked"
);

document
.getElementById(
"bookingForm"
)
.reset();

showSection(
"thankyou"
);

}

);



function goHome(){

document
.getElementById(
"bookingForm"
)
.reset();

showSection(
"home"
);

}