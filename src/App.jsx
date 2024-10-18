//import './App.css';
import "./style/noticias.css";
import Encabezado from './components/Encabezado';
import Noticias from './components/Noticias';
import { noticias } from "./data/noticias";

console.log(noticias);


function App() {
  return (

    <div>
    <Encabezado />
      <div className="container mt-5">
        <div className="row">
          {noticias.map(noticia => (
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
