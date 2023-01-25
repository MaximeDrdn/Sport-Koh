const navButton = document.getElementById('responsive__nav__button')

navButton.onclick = () => {
	const opened = navButton.classList.toggle('active');
	document.querySelector('header>nav')
		.style.left = opened ? '0' : '-100em';
}