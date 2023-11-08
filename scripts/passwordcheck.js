const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm-password");
const message = document.querySelector("#pw-message");

password.addEventListener("focusout", ResetConfirmPassword);
confirm.addEventListener("focusout", checkpasswordmatch);


function checkpasswordmatch() {
	if ((password.value !== confirm.value) && (confirm.value != "")) {
		message.textContent = "❌ Passwords do not match";
		confirm.style.backgroundColor = "#edf4f5";
		confirm.value = "";
        password.value = "";
		password.focus();
	} else if ((confirm.value !== "") && (password.value == confirm.value) ) {
        message.textContent = "✔ Passwords match";
        confirm.style.backgroundColor = "#edf4f5"
	}
    else {
        message.textContent = "Password must be 8 characters & alphanumeric";
        confirm.style.backgroundColor = "#edf4f5"
    }
}

function ResetConfirmPassword() {
	if ((password.value !== confirm.value) && (confirm.value != "")) {
		confirm.value = "";
        message.textContent = "Password must be 8 characters & alphanumeric";
        confirm.style.backgroundColor = "#edf4f5"

	} else if ((confirm.value !== "") && (password.value == confirm.value) ) {
        message.textContent = "✔ Passwords match";
        confirm.style.backgroundColor = "#edf4f5"
	}
    else {
        message.textContent = "Password must be 8 characters & alphanumeric";
        confirm.style.backgroundColor = "#edf4f5"
    }
}