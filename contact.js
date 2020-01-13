const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
	let info = [];
	if (username.value === '' || username.value == null) {
		info.push('Enter an username.');
	}
	if (password.value.length <= 8) {
		info.push('Password must have at least 8 characters.');
	}
	else if (password.value.search(/.*[\d].*/) == -1) {
		info.push('Password must contain a number.');
	}
	else if (password.value.search(/.*[A-Z].*/) == -1) {
		info.push('Password must have at least one uppercase letter.');
	}
	else if (password.value.search(/.*[a-z].*/) == -1) {
		info.push('Password must have at least one lowercase letter.');
	}
	//else if (password.value.search(.*/[!@#$%^&*].*/) == -1){
	//	info.push('Password must have at least one special character.')
	//}
	if (password.value.length >= 18) {
		info.push('Password must not have more than 18 characters.');
	}
	if (info.length > 0) {
    e.preventDefault();
    errorElement.innerText = info.join('\n');
    }

})