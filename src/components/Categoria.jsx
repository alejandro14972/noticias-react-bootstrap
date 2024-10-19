import useNoticia from "../hooks/useNoticia";

export default function Categoria({ categoria }) {
    const { handleClickCategoria, categoriaActual } = useNoticia();
    const { nombre, id } = categoria;

    return (
        <div className="col-xl-4 col-12 d-flex justify-content-center mt-2 "> {/* Centrar el botón en la columna */}
            <button 
                className={`${categoriaActual.id === id ? 'btn-success' : 'btn btn-secondary'}`} 
                type="button"
                onClick={() => handleClickCategoria(id)}
            >
                {nombre}
            </button>
        </div>
    );
}
