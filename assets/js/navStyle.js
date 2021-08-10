window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
		document.getElementsByClassName("navtop")[0].style.display = "none";
		document.getElementsByClassName("logo")[0].style.height = "45px";
		document.getElementsByClassName("navFix")[0].style.height = "60px";
		document.getElementsByClassName("navSecRightNav")[0].style.padding = "0px";
		document.getElementsByClassName("navFix")[0].style.top = "0";
		document.getElementsByClassName("hamburger")[0].style.paddingTop = "10px";
	} else {
		document.getElementsByClassName("navtop")[0].style.display = "flex";
		document.getElementsByClassName("navTopRight")[0].style.display = "block";
		document.getElementsByClassName("logo")[0].style.height = "70px";
		document.getElementsByClassName("navFix")[0].style.height = "";
		document.getElementsByClassName("navSecRightNav")[0].style.padding = "";
		document.getElementsByClassName("navFix")[0].style.top = "";
	}
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}