let menu = document.querySelector('#menu-true');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	
	menu.classList.toggle('fa-bars');
	navbar.classList.toggle('active');

}


/*window.onscroll = () => {


	menu.classList.remove('fa-bars');
	navbar.classList.remove('active');

}*/

document.querySelector('#search-icon').onclick = () => {
	document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
	document.querySelector('#search-form').classList.toggle('active');
}

