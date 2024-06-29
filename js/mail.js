function sendMail(){
    let parms= {
        name: document.getElementById("name").value,
        mail: document.getElementById("mail").value,
        mobile: document.getElementById("mobile").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_0fhlrpq","template_we2s4al",parms).then(alert("email send!!!"))

}