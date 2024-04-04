const contactForm = document.querySelector(".form-container");
let email = document.getElementById("from");
let subject = document.getElementById("subject");
let text = document.getElementById("text");


contactForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    

    let formData = {
        email: email.value,
        subject: subject.value,
        text: text.value,
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", '/');
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function (){
        console.log(xhr.responseText)
        if (xhr.responseText == "success") {
            alert("Email sent")
            email.value = "";
            subject.value = "";
            text.value = "";
        }else{
            alert("something went wrong")
        }
    }

    xhr.send(JSON.stringify(formData))
});