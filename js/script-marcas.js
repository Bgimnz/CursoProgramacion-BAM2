const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img") [0];
arrowIcons = document.querySelectorAll(".marcas i");

let isDragStart = false, prevPageX, prevScrollLeft; 
let firstImgWidth = firstImg.clientWidth + 14; //*toma la primera img width y añade 14 margin value

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        //* si clickeo el icono izaquiero, reduce el width value del carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    })
});

const dragStart = (e) => {
    //* updatating global variables value cuando el evento del mouse down
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
}

const dragging = (e) => {
    //* scrolling imagenes/carrusel hacia la izquierda acorde al mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mousemove", dragging);
