function openModal(title, description){

document.getElementById("modalTitle").innerHTML = title;

document.getElementById("modalDescription").innerHTML = description;

document.getElementById("modal").style.display = "block";

}

function closeModal(){

document.getElementById("modal").style.display = "none";

}

window.onclick = function(event){

let modal = document.getElementById("modal");

if(event.target == modal){

modal.style.display = "none";

}

}