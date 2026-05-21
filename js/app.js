function toggleAuth() {

    const title = document.getElementById("authTitle");
    const text = document.getElementById("authToggleText");
    
    if (title.innerText === "Register") {
    title.innerText = "Login";
    text.innerText = "Don't have an account?";
    }
    else {
    title.innerText = "Register";
    text.innerText = "Already have an account?";
    }
    
    }
    
    const authForm = document.getElementById("authForm");
    
    authForm.addEventListener("submit", function(e){
    
    e.preventDefault();
    
    document.getElementById("auth").style.display="none";
    
    document
    .getElementById("mainWebsite")
    .classList
    .remove("hidden");
    
    showSection("home");
    
    });
    
    
    function showSection(id){
    
    document
    .querySelectorAll(".section-container")
    .forEach(section=>{
    section.style.display="none";
    });
    
    document.getElementById("home").style.display="none";
    
    const selected =
    document.getElementById(id);
    
    if(selected){
    selected.style.display="block";
    }
    
    }
    
    
    const bookingForm =
    document.getElementById("bookingForm");
    
    if(bookingForm){
    
    bookingForm.addEventListener(
    "submit",
    function(e){
    
    e.preventDefault();
    
    alert(
    "Table booked successfully!"
    );
    
    });
    
    }