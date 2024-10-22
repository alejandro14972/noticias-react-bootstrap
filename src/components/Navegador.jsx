export default function Navegador() {

const urlImgLogo="../../public/img/geometric-icon-logo-geometric-abstract-element-free-vector.jpg"


  return (
    <div className="container-fluid">
       <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
            <img src={urlImgLogo} width="30" height="30"
                alt="Logo" className="img-fluid"/>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        España
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Asturias</a></li>
                        <li><a className="dropdown-item" href="#">Andalucía</a></li>
                        <li><a className="dropdown-item" href="#">Madrid</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Economía</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Tecnología</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Deportes
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Futbol</a></li>
                        <li><a className="dropdown-item" href="#">Baloncesto</a></li>
                    </ul>
                </li>
               
            </ul>
        </div>
    </nav>
    </div>
  )
}
