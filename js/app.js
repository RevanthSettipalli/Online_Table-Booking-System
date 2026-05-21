const auth = document.getElementById("auth");
const main = document.getElementById("mainWebsite");
const authForm = document.getElementById("authForm");

const authTitle = document.getElementById("authTitle");
const authToggleText = document.getElementById("authToggleText");

let loginMode = false;

// START → SHOW LOGIN PAGE
main.classList.add("hidden");

function toggleAuth() {

loginMode = !loginMode;

if(loginMode){
authTitle.innerText="Login";
authToggleText.innerText="Don't have account?";
}
else{
authTitle.innerText="Register";
authToggleText.innerText="Already have account?";
}

}

authForm.addEventListener("submit",(e)=>{

e.preventDefault();

auth.style.display="none";

main.classList.remove("hidden");

showSection("home");

});

function showSection(id){

const sections=document.querySelectorAll(".section-container");

sections.forEach(section=>{
section.style.display="none";
});

document.getElementById(id).style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

}

// BOOK NOW BUTTON
document.addEventListener("DOMContentLoaded",()=>{

showSection("home");

});


// RESERVE BUTTON
const bookingForm=document.getElementById("bookingForm");

if(bookingForm){

bookingForm.addEventListener("submit",(e)=>{

e.preventDefault();

document.getElementById("booking").style.display="none";

document.getElementById("confirmationPage").style.display="block";

});

}