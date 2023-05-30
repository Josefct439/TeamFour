import { Link } from "react-router-dom"

export const Index = () => {

 
   

    return (
        <>
            <body>
                <header className="cabezal">
                    <section>
                        <img className="logo" src="../src/assets/TEAM_FOUR-removebg-preview.png" alt="" />
                    </section>
                    <nav>
                        <ul>
                            <li><Link className="item" to="/" >Inicio</Link></li>
                            <li><Link className="item" to="/about" >Sobre Instant Food</Link></li>                        
                            <li className="item productos">Menú</li>
                            <li className="item novedades">Novedades</li>
                            <li className="item contacto">Contáctanos</li>
                        </ul>
                    </nav>
                </header>

                <section>
                    <img className="img" src="./src/assets/Fast_food_Hamburger_Buns_Tomatoes_French_fries_576086_1280x853.jpg" alt="" />
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

