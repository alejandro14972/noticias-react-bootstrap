// src/components/Noticias.jsx
import { useContext } from 'react';
import { noticias } from "../data/noticias";
import { newsContext } from "../App";

export default function Noticias() {
  const categoriaID = useContext(newsContext);
  let noticiasFiltradas = [];
    noticias.forEach((noticia) => {
      if (categoriaID.id == 0) {
        noticiasFiltradas.push(noticia);
      }
      if (noticia.categoria_id === categoriaID.id) {
        noticiasFiltradas.push(noticia);
      }
    });
  
  return (
    <div className="row mt-1">
      {noticiasFiltradas.map(item => (
        <div className="col-xl-3 col-md-6 col-12" key={item.id}>
          <div className="card">
            <img src={`/img/${item.imagen}.jpg`} className="card-img-top" alt={item.titulo} />
            <div className="card-body">
              <h5 className="card-title fw-bold">{item.titulo}</h5>
              <p className="card-text">{item.descripcion}</p>
              <a href="#" className="btn btn-primary">Leer más</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
