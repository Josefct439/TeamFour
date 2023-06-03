import React from "react";

export const Admin = () => {


    return (
        <>
            <header className="cabezal_menu">
                <section>
                    <img className="logo" src="../src/assets/TEAM_FOUR-removebg-preview.png" alt="" />
                </section>



            </header>
            <h1 className="titulo_sec">Estadisticas Instant Food</h1>
            <section className="estadisticas">
                <article className="art_esta">

                    <h1 className="titulos_esta">Estadisticas del mes</h1>
                    <p className="datos">Cantidad de productos vendidos: 1325</p>
                    <p className="datos">Cantidad de clientes registrados: 506</p>
                    <p className="datos">Cantidad de criticas/opinines registradas: 356</p>
                    <p className="datos">Producto mas vendido: Magic Burger</p>

                </article>
                <article className="art_esta">

                    <h1 className="titulos_esta">Estadisticas de la semana</h1>
                    <p className="datos">Cantidad de productos vendidos: 1325</p>
                    <p className="datos">Cantidad de clientes registrados: 506</p>
                    <p className="datos">Cantidad de criticas/opinines registradas: 356</p>
                    <p className="datos">Producto mas vendido: Hamburguesa Doble Troque</p>



                </article>

                <article className="art_esta">
                    <img className="grafico" src="../src/assets/Grafico1.jpg" alt="" />
                </article>
                <article className="art_esta">
                    <img className="grafico" src="../src/assets/Grafico2.jpg" alt="" />
                </article>


            </section>


        </>
    )

}
