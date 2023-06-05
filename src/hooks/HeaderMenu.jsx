import { Link } from "react-router-dom"

export const HeaderMenu = () => {

    return (
        <>
            <header className="cabezal_menu">
                <section>
                    <img className="logo" src="../src/assets/Logos/TEAM_FOUR-removebg-preview.png" alt="" />
                </section>
                <section className="Navmenu">
                    <nav>
                        <ul>
                            <li className="item">
                                <Link className="linkMenu" to="/">
                                    Inicio
                                </Link>
                            </li>
                            <li className="item">
                                <Link className="linkMenu" to="/about">
                                    Sobre Instant Food
                                </Link>
                            </li>
                            <li className="item">
                                <Link className="linkMenu" to="/menu">
                                    Menú
                                </Link>
                            </li>
                            <li className="item">
                                <Link className="linkMenu" to="/novedades">
                                    Novedades
                                </Link>
                            </li>
                            <li className="item">
                                <Link className="linkMenu" to="/contact">
                                    Contáctanos
                                </Link>
                            </li>
                        </ul>
                        {/*<button onClick={cerrar}>Cerrar sesión</button>*/}
                    </nav>
                </section>

                <section className="carritoicon">
                    <Link to="/carrito">
                        <img  className="icon" src="../src/assets/Iconos/IconCarrito.png" alt="" />
                    </Link>
                     
                    
                </section>


            </header>
        </>

    )




}