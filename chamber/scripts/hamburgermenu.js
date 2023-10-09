const hamButton = document.querySelector('#hamburgermenu');
const navigation = document.querySelector('.navigationmenu');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamButton.classList.toggle('show');
});

