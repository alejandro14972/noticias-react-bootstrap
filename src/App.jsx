//import './App.css';
import React, { useState } from "react";
import "./style/noticias.css";
import Encabezado from './components/Encabezado';
import Noticias from './components/Noticias';


import Navegador from "./components/Navegador";


=======
//import { noticias } from "./data/noticias";


export const newsContext = React.createContext();

function App() {
  const [news, setNews] = useState({ name: "Autonómicas", id: 1 });
  const [flag, setFlag] = useState(false);
  const cambiaNews = () => {

    if (news && !flag) {
      setNews({ name: "Nacionales", id: 2 });
      setFlag(true)
    } else {
      setNews({ name: "Autonómicas", id: 1 })
      setFlag(false)
    }
  }


  const Todo = () => {
    setNews({ name: "Todo", id: 0 });
  }
  return (
    <newsContext.Provider value={news}>
      <Encabezado />
     <Navegador /> 

      <div className="container mt-5">
        <div className="d-flex justify-content-between mb-4">
          <button className="btn btn-primary me-2" onClick={cambiaNews}>{news.name}</button>
          <button className="btn btn-secondary" onClick={Todo}>Ver todo</button>
        </div>

          <Noticias />
        </div>

    </newsContext.Provider>
  );
  
}


export default App;
