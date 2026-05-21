const auth=document.getElementById("auth");

const main=document.getElementById("mainWebsite");

const authForm=document.getElementById("authForm");

const authTitle=document.getElementById("authTitle");

const submitBtn=document.getElementById("submitBtn");

const authText=document.getElementById("authText");

let login=false;

main.classList.add("hidden");


function toggleAuth(){

login=!login;

if(login){

authTitle.innerText="Login";

submitBtn.innerText="Login";

authText.innerText=
"New User?";

}

else{

authTitle.innerText="Register";

submitBtn.innerText=
"Register";

authText.innerText=
"Already have account?";

}

}



authForm.addEventListener(

"submit",

(e)=>{

e.preventDefault();

if(!login){

alert(
"Registration Successful → Login Now"
);

toggleAuth();

return;

}

auth.style.display="none";

main.classList.remove("hidden");

showSection("home");

}

);



function showSection(id){

document
.querySelectorAll(
".section-container"
)

.forEach(

x=>x.style.display="none"

);

document
.getElementById(id)
.style.display="block";

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
"✅ Table Booked Successfully"
);

showSection(
"thankyou"
);

}

);