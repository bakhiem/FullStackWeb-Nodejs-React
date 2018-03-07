function bg_white(x){
	var li = document.querySelectorAll('li');
	for (var i = 0; i < li.length; i++) {
		li[i].classList.remove('bg_white');
	}
	x.classList.add("bg_white");
}