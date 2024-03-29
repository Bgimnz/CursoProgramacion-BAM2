const catalogo =  [
        {
            "id": 1,
            "title": "Broches Arcoiris",
            "descrip": "x12 Broches Muticolor",
            "estado": "No Disponible",
            "categoria": "marca",
            "img": "../img-productos/broches.png"
        },
        {
            "id": 2,
            "title": "Jabón Dove",
            "descrip": "Jabón Cremoso Original",
            "estado": "Disponible",
            "categoria": "marca",
            "img": "../img-productos/dove-jabon.png"
        },
        {
            "id": 3,
            "title": "Papel Higienico Elegante",
            "descrip": "Papel Higienico 4 x 80 m",
            "estado": "Disponible",
            "categoria": "papeles",
            "img": "../img-productos/elegante-papel-higienico.jpg"
        },
        {
            "id": 4,
            "title": "Pala de Mano Marlim",
            "descrip": "Pala de Plastico Reforzada",
            "estado": "No Disponible",
            "categoria": "marca",
            "img": "../img-productos/pala-plastico.png"
        },
        {
            "id": 5,
            "title": "Jabón Seiseme",
            "descrip": "Jabón Blanco SEISEME",
            "estado": "Disponible",
            "categoria": "quimico",
            "img": "../img-productos/seiseme.png"
        },
        {
            "id": 6,
            "title": "Jabón Liquido Tipo ALA",
            "descrip": "Bidon de 5L Tipo ALA",
            "estado": "No Disponible",
            "categoria": "liquidos",
            "img": "../img-productos/bidon-tipo-ala.jpg"
        },
];


let item = document.getElementById("catal");

//!Crea el catalogo de productos metiendo html en el div de catal
catalogo.map((producto) => {

    item.innerHTML+= `
    <div class="item" key=${producto.id}>
    <img src=${producto.img} class="itg" alt=${producto.title} />
    <div class="info-producto">
    <h5 class="titu-product">${producto.title}</h5>
    <p class="descripcion">${producto.descrip}</p>
    </div>
    <button class="estado">${producto.estado}</button>
    </div>
    `
}
)

//! Color de los Botones según el Estado (si esta disponible o no)
const botonEstado = document.querySelectorAll('.estado');

botonEstado.forEach((boton) => {
    const estado = boton.textContent.trim();

    if (estado === 'Disponible') {
        boton.setAttribute("style", "background: green; color: white;");
    } else {
        boton.setAttribute("style", "background: red; color: white;");
    }
});

