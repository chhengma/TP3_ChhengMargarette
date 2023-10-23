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