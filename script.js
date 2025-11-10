//your JS code here. If required.
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById(".close-modal");


openBtn.onclick = function(){
	modal.style.display = "block";
}

closeBtn.onclick = function (){
	modal.style.display = "none";
}

modal.onclick = function(event){
	if(event.target == modal){
		modal.style.display = "none";
	}
}
