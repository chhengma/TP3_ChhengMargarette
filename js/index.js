//Event Listener: Zoom sur les images
const zoomImages = document.querySelectorAll('.zoom-image');

zoomImages.forEach(image => {
	image.addEventListener('mouseover', function () {
		image.style.transform = 'scale(1.1)';
	});

	image.addEventListener('mouseout', function () {
		image.style.transform = 'scale(1)';
	});
});

//Form Alert
document.getElementById("monBouton").addEventListener("click", () => {
	alert("Félicitations, vous faites désormais partie de notre cercle de crocheteurs !");

	const subscribeForm = document.getElementById("subscribe-form");
	subscribeForm.reset();
});

//Form Focus
function myFunction(x) {
	x.style.background = "#E3E3AF";
}