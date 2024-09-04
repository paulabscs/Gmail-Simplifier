//Author: paulabscs
console.log("welcome to contentjs for Gmail simplifier");

window.addEventListener ("load", HIDEbar, false);

function HIDEbar() {
	//removes selection shadow when selecting the sidebar menu button
	var selected_image = document.getElementsByClassName('gb_Ic')
	if (selected_image.length > 0){selected_image[0].style.display = 'none';}
	//centers gmail logo
	var logo = document.getElementsByClassName('gb_ud gb_pd gb_rd')
	if (logo.length > 0){logo[0].style.marginLeft = "20px";}
	//removes whitespace from clicking the side menu button
	var empty = document.getElementsByClassName('nH bkK')
	if (empty.length > 0){empty[0].style.marginLeft = "0px";}// usually 72px when sidebar pressed
	//removes the side menu
	var elements = document.getElementsByClassName('aeN WR baA nH oy8Mbf')// alternatively use querySelectorAll();
	console.log("elements.length");
	console.log(elements.length);
	for (var i = 0, l = elements.length; i < l; i++) {
		elements[i].style.display = 'none';
	}
}


