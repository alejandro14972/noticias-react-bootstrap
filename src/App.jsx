import './style/normalize.css';
import "./style/noticias.css";

import Encabezado from './components/Encabezado';
import Noticias from './components/Noticias';
import Categoria from "./components/Categoria";

import { noticias as data } from "./data/noticias";

import useNoticias from "./hooks/useNoticia";




function App() {

  
  const { categorias, categoriaActual } = useNoticias();

  let noticiasFiltradas;
  if (categoriaActual && categoriaActual.id === 0) {
    noticiasFiltradas = data;
  } else if ((categoriaActual)) {
    noticiasFiltradas = data.filter(noticia => noticia.categoria_id === categoriaActual.id);
  } else {
    noticiasFiltradas = [];
  }


  return (
    <div className="row">
      <Encabezado
        key={Encabezado.id}
        categoria={categoriaActual}
      />

      <div className="row">
        {categorias.map(categoria => (
          <Categoria
            key={categoria.id}
            categoria={categoria}
          />
        ))}
      </div>

      <div className="container mt-5">
        <div className="row">
          {noticiasFiltradas.map(noticia => (
            <Noticias
              key={noticia.id}
              noticia={noticia}
            />
          ))}
        </div>
      </div>





    </div>

  );
}

export default App;
