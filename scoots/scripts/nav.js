const navButton = document.querySelector('#navbutton');
const navMenu = document.querySelector('.navigationmenu');

navButton.addEventListener('click', () => {
	navMenu.classList.toggle('show');
	navButton.classList.toggle('show');
});