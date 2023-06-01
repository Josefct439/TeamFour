import React from "react";
import { useCarrito } from "../hooks/useCarrito";




export const Menu = () => {
    
    const { contar, aumentar, disminuir, reiniciar } = useCarrito()

    return (
        <>
            <header className="cabezal_menu">
                <section>
                    <img className="logo" src="../src/assets/TEAM_FOUR-removebg-preview.png" alt="" />
                </section>



            </header>

            <section className="productos">
                <article className="articulo a1">

                    <div className="conpro">
                        <img className="comidas" src="../src/assets/Magic Burger.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h4>MAGIC BURGER</h4>
                        <p>Hamburguesa con pan brioche, 200 g de carne, rellena y fundida en queso holandes, tocineta, cebolla caramelizada, cebolla y lechuga.  </p>
                    </div>
                    <div className="conpro">
                       <p>Normal: $ 32.000</p> 
                       <p>Con Acompañante: $ 37.000</p> 
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>


                </article>
                <article className="articulo a2">
                    <img className="comidas" src="../src/assets/imagen2.png" alt="" />
                </article>
                <article className="articulo a3">
                    <img className="comidas" src="../src/assets/imagen3.png" alt="" />
                </article>
                <article className="articulo a4">
                    <img className="comidas" src="../src/assets/imagen4.jpg" alt="" />
                </article>
                <article className="articulo a5">
                    <img className="comidas" src="../src/assets/Pizza.png" alt="" />
                </article>
            </section>

        </>
    )


}