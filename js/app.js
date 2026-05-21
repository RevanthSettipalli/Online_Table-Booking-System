let register=true;


// LOGIN

function toggleAuth(){

const title=
document.getElementById(
"authTitle"
);

const btn=
document.querySelector(
"#authForm button"
);

const text=
document.getElementById(
"authToggleText"
);

if(register){

title.innerHTML="Login";

btn.innerHTML="Login";

text.innerHTML=
"New User?";

}

else{

title.innerHTML=
"Register";

btn.innerHTML=
"Register";

text.innerHTML=
"Already have account?";

}

register=!register;

}



document
.getElementById(
"authForm"
)

.addEventListener(

"submit",

(e)=>{

e.preventDefault();

if(register){

alert(
"Registration Successful"
);

toggleAuth();

return;

}

document
.getElementById(
"auth"
)
.style.display=
"none";

document
.getElementById(
"mainWebsite"
)
.classList
.remove(
"hidden"
);

showHome();

}

);




// HOME

function showHome(){

document
.getElementById(
"home"
)
.style.display=
"flex";

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
"none";

}



// BOOK NOW

document
.addEventListener(

"DOMContentLoaded",

()=>{

document
.getElementById(
"bookBtn"
)

.onclick=()=>{

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

document
.getElementById(
"bookingForm"
)
.reset();

};

});




// BOOK

document
.getElementById(
"bookingForm"
)

.addEventListener(

"submit",

(e)=>{

e.preventDefault();

alert(
"Table Booked Successfully"
);

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

e.target.reset();

}

);




// HOME BTN

function goHome(){

showHome();

}