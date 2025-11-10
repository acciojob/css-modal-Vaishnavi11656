//your JS code here. If required.
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById(".close-modal");


openBtn.onClick = function(){
	modal.style.display = "flex";
}

closeBtn.onClick = function (){
	modal.style.display = "none";
}

modal.onClick = function(event){
	if(event.target == modal){
		modal.style.display = "none";
	}
}
