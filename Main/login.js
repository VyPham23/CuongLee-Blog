function validate(){
    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    if ( username == "phammaivy" && password == "12345"){
        window.location.href = "blog.html"; // Redirecting to other page.
    }
}