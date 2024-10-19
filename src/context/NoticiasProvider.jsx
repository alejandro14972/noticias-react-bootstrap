import { createContext, useState } from "react";
import { categorias as categoriasDB} from "../data/categorias.js";


const NoticiaContext = createContext();

const NoticiaProvider = ({ children }) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);


    const handleClickCategoria= id =>{
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        console.log(categoria); 
        setCategoriaActual(categoria);
    }

    return (
        <NoticiaContext.Provider
            value={{
              categorias, 
              categoriaActual,
              handleClickCategoria
            }}
        >
            {children}
        </NoticiaContext.Provider>
    );
};

export {
    NoticiaProvider
};

export default NoticiaContext;
