// Obetengo los datos por JSON
const getProducts = async () => {
    const respuesta = await fetch ("../pages/productos.json");
    const datos = await respuesta.json()
};

