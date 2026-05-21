// Authentication

function toggleAuth() {

    const title = document.getElementById("authTitle");
    const text = document.getElementById("authToggleText");
    
    if(title.innerText==="Register"){
    title.innerText="Login";
    text.innerText="Don't have an account?";
    }
    else{
    title.innerText="Register";
    text.innerText="Already have an account?";
    }
    
    }
    
    document
    .getElementById("authForm")
    .addEventListener("submit",(e)=>{
    
    e.preventDefault();
    
    document.getElementById("auth").style.display="none";
    
    document
    .getElementById("mainWebsite")
    .classList
    .remove("hidden");
    
    document.getElementById("home").style.display="flex";
    
    });
    
    
    
    // Navigation
    
    function showSection(sectionId){
    
    // hide all sections
    
    document.getElementById("home").style.display="none";
    
    document.getElementById("booking").style.display="none";
    
    document.getElementById("gallery").style.display="none";
    
    document.getElementById("contact").style.display="none";
    
    
    // show selected
    
    document.getElementById(sectionId).style.display="block";
    
    }
    
    
    
    // Booking
    
    document
    .getElementById("bookingForm")
    .addEventListener("submit",(e)=>{
    
    e.preventDefault();
    
    alert("Booking Confirmed!");
    
    });