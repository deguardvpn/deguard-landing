export function mobileMenuHandler() {
	const menu = document.querySelector('.mobile-menu');
	
	menu.classList.toggle('active');
	document.body.classList.toggle('fixed');
}