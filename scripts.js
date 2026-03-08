const userNameInput = document.getElementById("userName");
const passwordInput = document.getElementById("password");
const signInBtn = document.getElementById("submitBtn");


signInBtn.addEventListener('click', function(e) {
    e.preventDefault(); 
    const user = "admin";
    const pass = "admin123";

    if (userNameInput.value === user && passwordInput.value === pass) {
        console.log("Success! Redirecting...");
        window.location.href = "home.html";
    } else {
        console.log("Error: Wrong username or password");
        alert("Invalid credentials!");
    }
});