export default function Encabezado({ categoria }) { 

    console.log(categoria);
    const { nombre, descripcion } = categoria;

    return (
        <div className="container-fluid p-5 bg-primary text-white text-center">
            <h1>{categoria ? categoria.nombre : "No hay categoría seleccionada"}</h1> 
            <p>{descripcion}</p>
        </div>
    );
}
