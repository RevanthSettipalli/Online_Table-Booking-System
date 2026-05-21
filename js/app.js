document
.getElementById("authForm")

.addEventListener(

"submit",

function(e){

e.preventDefault();

document
.getElementById("auth")
.style.display="none";

document
.getElementById("mainWebsite")
.classList.remove("hidden");

}

);


function showSection(id){

document
.getElementById("home")
.style.display="none";

document
.getElementById("booking")
.style.display="none";

document
.getElementById("confirmationPage")
.style.display="none";

document
.getElementById(id)
.style.display="block";

}


document
.getElementById("bookingForm")

.addEventListener(

"submit",

function(e){

e.preventDefault();

showSection(
"confirmationPage"
);

}

);