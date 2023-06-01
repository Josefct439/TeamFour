import { Link } from "react-router-dom"

Link
export const Header = () =>{
    return(
        <header className="cabezal">
        <nav>
          <ul>
            <li className="item">
              <Link className="link" to="/">
                Inicio
              </Link>
            </li>
            <li className="item">
              <Link className="link" to="/about">
                Sobre Instant Food
              </Link>
            </li>
            <li className="item">
              <Link className="link" to="/menu">
                Menú
              </Link>
            </li>
            <li className="item">
              <Link className="link" to="/novedades">
                Novedades
              </Link>
            </li>
            <li className="item">
              <Link className="link" to="/contact">
                Contáctanos
              </Link>
            </li>
          </ul>
          {/*<button onClick={cerrar}>Cerrar sesión</button>*/}
        </nav>
      </header>
      

    )
}