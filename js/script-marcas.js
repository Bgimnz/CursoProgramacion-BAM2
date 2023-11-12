const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img") [0];
arrowIcons = document.querySelectorAll(".marcas i");

let isDragStart = false, prevPageX, prevScrollLeft; 
let firstImgWidth = firstImg.clientWidth + 14; //*toma la primera img width y añade 14 margin value

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        //* si clickeo el icono izaquierdo, reduce el ancho del carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    })
});