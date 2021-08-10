window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
		document.getElementsByClassName("navTopLeft")[0].style.display = "none";
		document.getElementsByClassName("navTopRight")[0].style.display = "none";
		document.getElementsByClassName("logo")[0].style.fontSize = "25px";
	} else {
		document.getElementsByClassName("navTopLeft")[0].style.display = "block";
		document.getElementsByClassName("navTopRight")[0].style.display = "block";
	}
}
