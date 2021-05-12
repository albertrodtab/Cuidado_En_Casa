// Función Librería jQuery para efecto del menú, que permite que al pasar el ratón
//el submenú se vea y al quitar el ratón vuelva a desaparecer.
$(document).ready(function() {
	$menu = $('#menu').find('ul').find('li');

	$menu.hover(function() {
		$(this).children('ul').stop();
		$(this).children('ul').slideDown();
	}, function() {
		$(this).children('ul').stop();
		$(this).children('ul').slideUp();
	});
});


//codigo de javascript para controlar la funcionalidad de la galería de imagenes.
// Función para controlar el slider de las fotografías
var slideIndex = 1;
showSlides(slideIndex);

// Botones anterior y siguiente
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Menu inferior cambio de imágenes
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1} 
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"; 
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block"; 
	dots[slideIndex-1].className += " active";
}


