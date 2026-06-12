function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let filter = searchInput.value.toLowerCase();

let books = document.querySelectorAll(".book-card");

books.forEach(book => {

let title = book.querySelector("h3").textContent.toLowerCase();

if(title.includes(filter)){
book.style.display = "block";
}
else{
book.style.display = "none";
}

});

});
}