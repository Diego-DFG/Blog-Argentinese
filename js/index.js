const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navItemsList = document.getElementsByClassName('nav-items-list')[0];
toggleButton.addEventListener('click', () => {
		navItemsList.classList.toggle('active');
});
