//your JS code here. If required.
const modal = document.getElementByID("myModal");
const openBtn = document.getElementByID("openModal");
const closeBtn = document.getElementByID(".close-modal");


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
