import { Link } from "react-router-dom"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from '../Firebase/config'
import { NavLink, useNavigate } from 'react-router-dom'

export const Index = () => {

    //const cerrar = () => {localStorage.clear()}

    
    return (
        <>
            <body>
                <header className="cabezal">
                    <section>
                        <img className="logo" src="../src/assets/TEAM_FOUR-removebg-preview.png" alt="" />
                    </section>
                    <nav>
                        <ul>
                            <li className="item"><Link className="link" to="/">Inicio</Link></li>
                            <li className="item"><Link className="link" to="/about">Sobre Instant Food</Link></li>                        
                            <li className="item"><Link className="link" to="/menu">Menú</Link></li>   
                            <li className="item"><Link className="link" to="/novedades">Novedades</Link></li> 
                            <li className="item"><Link className="link" to="/contactos">Contáctanos</Link></li> 
                        </ul>
                        {/*<button onClick={cerrar}>Cerrar sesión</button>*/}
                    </nav>
                </header>
                  
                <section>
                    
                    <img className="img" src="./src/assets/Fast_food_Hamburger_Buns_Tomatoes_French_fries_576086_1280x853.jpg" alt=""  />
                    
                </section>

                <section className="secciones">
                    <article className="bloque bienvenido">
                        <h1 className="titulo">
                            ¿ESTÁS LISTO?
                        </h1>
                        
                        <p className="descripcion">
                            Sumérgete en un mundo de sabores irresistibles y
                            disfruta de nuestras increíbles combinaciones de
                            comida rápida. Desde hamburguesas jugosas con
                            papas fritas crujientes hasta tacos
                            sabrosos con refrescantes bebidas, tenemos
                            algo para satisfacer todos los antojos.
                        </p>
                    </article>
                    <article className="bloque contactos">
                        <img className ="imagenes" src="./src/assets/imagen1.png" alt="" />
                    </article>


                </section>

            </body>

        </>
    )

    
}

