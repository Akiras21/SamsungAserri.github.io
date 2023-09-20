const slider = document.querySelector(".slider");
const antesButton = document.querySelector(".antes");
const despuesButton = document.querySelector(".despues");
const images = document.querySelectorAll(".slider img");

//slider

let currentIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function moveNext() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function movePrevious() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}
//Botones del slider
despuesButton.addEventListener("click", moveNext);
antesButton.addEventListener("click", movePrevious);
//Buscador 
const imagen = document.getElementById('search');
imagen.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.focus();
    input.classList.add('custom-input');
    const header = document.querySelector('header');
    header.appendChild(input);
    input.focus();
});