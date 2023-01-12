let image = document.querySelector("img");
image.addEventListener("mouseover", firstimage);

function firstimage(){
    image.src="assets/images/2.jpg"
}

let image1 = document.querySelector("img");
image.addEventListener("mouseout", secondimage);

function secondimage(){
    image1.src="assets/images/1.jpg"
}

let text = document.querySelector("p:nth-child(2)");
text.addEventListener("click", texte);

function texte(){
    text.textContent = "Second texte en italique";
    text.style.fontStyle = "italic"
}
