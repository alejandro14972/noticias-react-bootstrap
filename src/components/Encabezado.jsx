import { useContext } from "react";
import { newsContext } from "../App";
export default function Encabezado() {


    const enunciado = useContext(newsContext);
    console.log(enunciado);

    return (

        <div className="container-fluid p-5 bg-primary text-white text-center">
            <h1>CIFP AVILÉS NOTICIAS</h1>
            {enunciado && <p>Noticias: {enunciado.name}</p>}
        </div>

    )
}
