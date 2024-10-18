export default function Noticias({ noticia }) {
    const { titulo, descripcion, imagen } = noticia;
  
    return (
      <div className="mt-1 col-xl-3 col-md-6 col-12">
        <div className="card">
          <img src={`/img/${imagen}.jpg`} className="card-img-top" alt={titulo} />
          <div className="card-body">
            <h5 className="card-title fw-bold">{titulo}</h5>
            <p className="card-text">{descripcion}</p>
            <a href="#" className="btn btn-primary">Leer más</a>
          </div>
        </div>
      </div>
    );
  }
  