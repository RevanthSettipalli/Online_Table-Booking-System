const authForm=
document.getElementById("authForm");

const auth=
document.getElementById("auth");

const main=
document.getElementById("mainWebsite");

const title=
document.getElementById("authTitle");

const toggleText=
document.getElementById("authToggleText");

function toggleAuth(){

if(title.textContent==="Register"){

title.textContent="Login";

toggleText.innerText=
"Create Account";

}

else{

title.textContent=
"Register";

toggleText.innerText=
"Already have account?";

}

}

authForm.addEventListener(

"submit",

(e)=>{

e.preventDefault();

auth.style.display="none";

main.classList.remove("hidden");

}

);

function showSection(id){

document

.querySelectorAll(

".section-container"

)

.forEach(

s=>s.style.display="none"

);

document

.getElementById(id)

.style.display="block";

}