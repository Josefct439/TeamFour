import { HeaderMenu } from "../hooks/HeaderMenu";
import "../assets/css/EstilosAbout.css";
export const About = () => {


    return (
        <>
        <HeaderMenu/>
        <div className="aboutcontainer">
            
            <section>
                <h1 className="SOBRE_I">
                    🍔 SOBRE INSTANT FOOD 🍔
                </h1>

            </section>

            <br />

            <section className="Contenedor_About">
                <br />
                <h1 className="descripcion_1">
                    TEAM FOUR es una empresa que surge como una oportunidad de negocio en la cual los clientes
                    tienen la posibilidad de adquirir comidas rápidas de diferentes franquicias de este mercado
                    como Atrium, Distrito e Inmoral. <br /> <br />

                    El objetivo principal de la página web es conectar a los usuarios con los productos que ofrecen
                    estas empresas y que puedan realizar órdenes  que los incluyan, pudiendo de esta forma dejar
                    opiniones y recomendaciones sobre estos.
                </h1>




            </section>

            <br />
            <br />

            <section>
                <hr />
                <h1 className="animate">
                    ¿Qué esperas para disfrutar la diversidad de sabores? 😋😍 <br />
                    🥪🍟 !! ANIMATE YA  !! 🌭🍕
                </h1>

                <hr />
            </section>

        </div>
        </>
        )
}