const contactName = document.getElementById("name");
const contactEmail = document.getElementById("email");
const contactPhone = document.getElementById("phone");
const contactMessage = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");
const contactInfo = document.getElementById("contactInfo");

submitBtn.addEventListener("click", function(event){
    console.log("it's working");
    event.preventDefault();

    if(contactName.value == "" || contactEmail.value == "" || contactPhone.value == "" || contactMessage.value == ""){
     alert("Please fill out all the field in the form");
    }else{
        console.log(contactName.value, contactEmail.value,contactPhone.value,contactMessage.value);

        // create table row
        const newRow = document.createElement("tr");

        // Creating new name data
        const newContactInfo = document.createElement("td");
        newContactInfo.innerHTML = contactName.value;
        newRow.appendChild(newContactInfo);


        //Creating new email data
        const newEmail = document.createElement("td");
        newEmail.innerHTML = contactEmail.value;
        newRow.appendChild(newEmail);

        // Creating new phone data
        const newPhone = document.createElement("td");
        newPhone.innerHTML = contactPhone.value;
        newRow.appendChild(newPhone);

        // Creating new message data
        const newMessage = document.createElement("td");
        newMessage.innerHTML = contactMessage.value;
        newRow.appendChild(newMessage);
        // display value in the table
        contactInfo.appendChild(newRow);

    }
    contactName.value = "";
    contactEmail.value = "";
    contactPhone.value = "";
    contactMessage.value = "";
})
