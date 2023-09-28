const hamButton = document.querySelector('#hamburgermenu');
const navigation = document.querySelector('#nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamButton.classList.toggle('show');
});

