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

            <section className="productos hamburguesas">
                <h1 className="titulo_sec"> Hamburguesas</h1>
                <article className="articulo a1">

                    <div className="conpro">
                        <img className="comidas" src="../src/assets/Magic Burger.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>MAGIC BURGER</h2>
                        <p>Hamburguesa con pan brioche, 200 g de carne, rellena y fundida en queso holandes, tocineta, cebolla caramelizada, cebolla y lechuga.  </p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Normal: $ 32.000</p>
                        <p className="pre">Con Acompañante: $ 37.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>


                <article className="articulo a2">
                    <div className="conpro">
                        <img className="comidas" src="../src/assets/Magic Burger.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>SWEET BACON</h2>
                        <p>Hamburguesa con pan brioche, 200 g de carne, rellena y fundida en queso holandes, tocineta, cebolla caramelizada, cebolla y lechuga.  </p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Normal: $ 26.000</p>
                        <p className="pre">Con Acompañante: $ 31.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>



                <article className="articulo a3">
                <div className="conpro">
                        <img className="comidas" src="../src/assets/Magic Burger.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>DOBLE TROQUE</h2>
                        <p>Hamburguesa con pan brioche, 200 g de carne, rellena y fundida en queso holandes, tocineta, cebolla caramelizada, cebolla y lechuga.  </p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Normal: $ 37.000</p>
                        <p className="pre">Con Acompañante: $ 42.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>


                <article className="articulo a4">
                <div className="conpro">
                        <img className="comidas" src="../src/assets/Magic Burger.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>DOBLE TROQUE</h2>
                        <p>Hamburguesa con pan brioche, 200 g de carne, rellena y fundida en queso holandes, tocineta, cebolla caramelizada, cebolla y lechuga.  </p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Normal: $ 37.000</p>
                        <p className="pre">Con Acompañante: $ 42.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>


                <article className="articulo a5">
                <div className="conpro">
                        <img className="comidas" src="../src/assets/Magic Burger.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>DOBLE TROQUE</h2>
                        <p>Hamburguesa con pan brioche, 200 g de carne, rellena y fundida en queso holandes, tocineta, cebolla caramelizada, cebolla y lechuga.  </p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Normal: $ 37.000</p>
                        <p className="pre">Con Acompañante: $ 42.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>
            </section>

            <section className="productos desgranados">
                <h1 className="titulo_sec"> Desgranados</h1>
                <article className="articulo b1">

                    <div className="conpro">
                        <img className="comidas" src="../src/assets/Magic Burger.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>MAGIC BURGER</h2>
                        <p>Hamburguesa con pan brioche, 200 g de carne, rellena y fundida en queso holandes, tocineta, cebolla caramelizada, cebolla y lechuga.  </p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Normal: $ 32.000</p>
                        <p className="pre">Con Acompañante: $ 37.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>


                </article>
                <article className="articulo b2">
                <div className="conpro">
                        <img className="comidas" src="../src/assets/Magic Burger.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>MAGIC BURGER</h2>
                        <p>Hamburguesa con pan brioche, 200 g de carne, rellena y fundida en queso holandes, tocineta, cebolla caramelizada, cebolla y lechuga.  </p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Normal: $ 32.000</p>
                        <p className="pre">Con Acompañante: $ 37.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>


                <article className="articulo b3">
                <div className="conpro">
                        <img className="comidas" src="../src/assets/Magic Burger.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>MAGIC BURGER</h2>
                        <p>Hamburguesa con pan brioche, 200 g de carne, rellena y fundida en queso holandes, tocineta, cebolla caramelizada, cebolla y lechuga.  </p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Normal: $ 32.000</p>
                        <p className="pre">Con Acompañante: $ 37.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>


                <article className="articulo b4">
                <div className="conpro">
                        <img className="comidas" src="../src/assets/Magic Burger.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>DOBLE TROQUE</h2>
                        <p>Hamburguesa con pan brioche, 200 g de carne, rellena y fundida en queso holandes, tocineta, cebolla caramelizada, cebolla y lechuga.  </p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Normal: $ 37.000</p>
                        <p className="pre">Con Acompañante: $ 42.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>


                <article className="articulo b5">
                <div className="conpro">
                        <img className="comidas" src="../src/assets/Magic Burger.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>DOBLE TROQUE</h2>
                        <p>Hamburguesa con pan brioche, 200 g de carne, rellena y fundida en queso holandes, tocineta, cebolla caramelizada, cebolla y lechuga.  </p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Normal: $ 37.000</p>
                        <p className="pre">Con Acompañante: $ 42.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>
            </section>

            <section className="productos desgranados">
                <h1 className="titulo_sec"> Pizzas</h1>
                <article className="articulo c1">

                    <div className="conpro">
                        <img className="comidas" src="../src/assets/Magic Burger.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>MAGIC BURGER</h2>
                        <p>Hamburguesa con pan brioche, 200 g de carne, rellena y fundida en queso holandes, tocineta, cebolla caramelizada, cebolla y lechuga.  </p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Normal: $ 32.000</p>
                        <p className="pre">Con Acompañante: $ 37.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>


                </article>
                <article className="articulo c2">
                <div className="conpro">
                        <img className="comidas" src="../src/assets/Magic Burger.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>MAGIC BURGER</h2>
                        <p>Hamburguesa con pan brioche, 200 g de carne, rellena y fundida en queso holandes, tocineta, cebolla caramelizada, cebolla y lechuga.  </p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Normal: $ 32.000</p>
                        <p className="pre">Con Acompañante: $ 37.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>


                <article className="articulo c3">
                <div className="conpro">
                        <img className="comidas" src="../src/assets/Magic Burger.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>MAGIC BURGER</h2>
                        <p>Hamburguesa con pan brioche, 200 g de carne, rellena y fundida en queso holandes, tocineta, cebolla caramelizada, cebolla y lechuga.  </p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Normal: $ 32.000</p>
                        <p className="pre">Con Acompañante: $ 37.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>


                <article className="articulo c4">
                <div className="conpro">
                        <img className="comidas" src="../src/assets/Magic Burger.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>DOBLE TROQUE</h2>
                        <p>Hamburguesa con pan brioche, 200 g de carne, rellena y fundida en queso holandes, tocineta, cebolla caramelizada, cebolla y lechuga.  </p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Normal: $ 37.000</p>
                        <p className="pre">Con Acompañante: $ 42.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>


                <article className="articulo c5">
                <div className="conpro">
                        <img className="comidas" src="../src/assets/Magic Burger.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>DOBLE TROQUE</h2>
                        <p>Hamburguesa con pan brioche, 200 g de carne, rellena y fundida en queso holandes, tocineta, cebolla caramelizada, cebolla y lechuga.  </p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Normal: $ 37.000</p>
                        <p className="pre">Con Acompañante: $ 42.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>
            </section>

        </>
    )


}