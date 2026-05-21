function toggleAuth(){

    const title=document.getElementById("authTitle");
    const text=document.getElementById("authToggleText");
    
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
    
    document.getElementById("auth").classList.add("hidden");
    
    document
    .getElementById("mainWebsite")
    .classList.remove("hidden");
    
    });
    
    
    
    function showSection(id){
    
    ["home","booking","gallery","contact"]
    .forEach(section=>{
    
    document
    .getElementById(section)
    .style.display="none";
    
    });
    
    document
    .getElementById(id)
    .style.display="block";
    
    }
    
    
    
    document
    .getElementById("bookingForm")
    .addEventListener("submit",(e)=>{
    
    e.preventDefault();
    
    alert("Table Reserved Successfully!");
    
    });