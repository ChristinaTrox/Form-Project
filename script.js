const psw = document.getElementById("psw");
const confirmation = document.getElementById("confirmation");

function validatePasswords() {
    if (confirmation.value !== psw.value) {
        confirmation.setCustomValidity('Passwords must match!');
    } else {
        confirmation.setCustomValidity('');
    }
}

confirmation.addEventListener('input', validatePasswords);
psw.addEventListener('input', validatePasswords);