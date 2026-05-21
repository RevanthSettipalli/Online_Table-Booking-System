function showPage(pageId){

document
.querySelectorAll(
'.container'
)

.forEach(

page=>

page.classList
.add('hidden')

);

document

.getElementById(
pageId
)

.classList

.remove(
'hidden'
);

}

function registerUser(){

alert(

"Registration successful! Welcome to Hotel Bakasura."

);

showPage(
"loginPage"
);

return false;

}

function validateLogin(){

alert(

"Login successful!"

);

showPage(
"ambiencePage"
);

return false;

}

function confirmBooking(event){

event.preventDefault();

let name=

document

.getElementById(
"name"
)

.value;

let date=

document

.getElementById(
"date"
)

.value;

let time=

document

.getElementById(
"time"
)

.value;

let guests=

document

.getElementById(
"guests"
)

.value;

alert(

`Thank you ${name}
Booking confirmed
${date}
${time}
Guests:${guests}`

);

showPage(
"contactPage"
);

}