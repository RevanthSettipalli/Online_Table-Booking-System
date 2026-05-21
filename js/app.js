let register=true;

function toggleAuth(){

const title=document.getElementById("authTitle");

const text=document.getElementById("authToggleText");

const btn=document.querySelector("#authForm button");

if(register){

title.innerHTML="Login";

btn.innerHTML="Login";

text.innerHTML="Don't have account?";

}

else{

title.innerHTML="Register";

btn.innerHTML="Register";

text.innerHTML="Already have account?";

}

register=!register;

}


document

.getElementById("authForm")

.addEventListener(

"submit",

(e)=>{

e.preventDefault();

if(register){

alert("Registered");

toggleAuth();

return;

}

document

.getElementById("auth")

.style.display="none";

document

.getElementById("mainWebsite")

.classList

.remove("hidden");

}

);


document

.addEventListener(

"DOMContentLoaded",

()=>{

document

.getElementById("bookBtn")

.addEventListener(

"click",

()=>{

document

.getElementById("home")

.style.display="none";

document

.getElementById("booking")

.style.display="block";

}

);

}


);


document

.getElementById("bookingForm")

.addEventListener(

"submit",

(e)=>{

e.preventDefault();

alert("Table Booked");

e.target.reset();

document

.getElementById("booking")

.style.display="none";

document

.getElementById("thankyou")

.style.display="flex";

}

);


function goHome(){

location.reload();

}