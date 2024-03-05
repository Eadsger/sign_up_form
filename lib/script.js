var password = document.getElementById("password"), confirm_password = document.getElementById("confirm_password");

const valid1 = document.getElementById('validation-error');
    
function validatePassword(){
    if(password.value != confirm_password.value || (password.value === '' && confirm_password.value === '')) {
    confirm_password.setCustomValidity("Error: Passwords don't match. Please try again.");
    password.style.borderColor = "#C13838";
    confirm_password.style.borderColor = "#C13838";
    valid1.textContent = "*Passwords do not match";
    valid1.classList.add('error');
    } else {
    confirm_password.setCustomValidity('');
    valid1.textContent = "";
    }
    if(password.value === confirm_password.value) {
        password.style.borderColor = "#3cd33c";
        confirm_password.style.borderColor = "#3cd33c";  
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

window.onload = redPassword;

function redPassword() {
    password.style.borderColor = "#C13838";
    confirm_password.style.borderColor = "#C13838";
    valid1.textContent = "*Passwords do not match";
    valid1.classList.add("error");
}