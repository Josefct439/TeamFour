import React from "react";
import { useCarrito } from "../hooks/useCarrito";
import { HeaderMenu } from "../hooks/HeaderMenu";




export const Menu = () => {

    const { contar, aumentar, disminuir, reiniciar } = useCarrito()

    localStorage.setItem("contador", [contar])
    


    return (
        <>
            <HeaderMenu />
            <header>
                <section> <h2 className="Carrito">Carrito: {contar} </h2></section>
            </header>



            <section className="productos hamburguesas">
                <h1 className="titulo_sec"> Hamburguesas</h1>
                <article className="articulo a1">

                    <div className="conpro">
                        <img className="comidas" src="../src/assets/Hamburguesas/Imagen1.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>MAGIC BURGER</h2>
                        <p className="desc">Hamburguesa con pan brioche, 200 g de carne, rellena y fundida en queso holandes, tocineta, cebolla caramelizada, cebolla y lechuga.  </p>
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
                        <img className="comidas" src="../src/assets/Hamburguesas/Imagen2.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>SWEET BACON</h2>
                        <p className="desc">Pan brioche, 150 g de carne Certified Angus Beef®, cebolla caramelizada, queso cheddar americano, doble tocineta, salsa tártara y salsa de la casa. </p>
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
                        <img className="comidas" src="../src/assets/Hamburguesas/Imagen3.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>DOBLE TROQUE</h2>
                        <p className="desc">Pan brioche, 300 g de carne Certified Angus Beef®, doble queso cheddar americano, doble tocineta, cebolla crunch, lechuga crespa, tomate y salsa de la casa. </p>
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
                        <img className="comidas" src="../src/assets/Hamburguesas/Imagen4.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>LA MOJIGATA</h2>
                        <p className="desc"> Pan de papa artesanal, carne brangus americana, queso cheddar, cebolla caramelizada en azúcar morena, tomate, lechuga cogollo europeo, salsa inmoral  </p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Normal: $ 23.000</p>
                        <p className="pre">Con Acompañante: $ 28.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>


                <article className="articulo a5">
                    <div className="conpro">
                        <img className="comidas" src="../src/assets/Hamburguesas/Imagen5.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>LA LEGENDARIA</h2>
                        <p className="desc">Carne de Res (150gr), queso cheddar, salami pepperoni chorizo español, cebolla caramelizada, salsa mayonesa  </p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Normal: $ 31.000</p>
                        <p className="pre">Con Acompañante: $ 36.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>
            </section>

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

            <section className="productos desgranados">
                <h1 className="titulo_sec"> Para chuparse los dedos</h1>
                <article className="articulo b1">

                    <div className="conpro">
                        <img className="comidas" src="../src/assets/Desgranados/Imagen1.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>DESGRANADO DE POLLO</h2>
                        <p className="desc">Pollo acompañado de queso costeño, maíz, patacón rallado o papitas fosforito, bollo, lechuga y salsa tártara.</p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Con bollo: $ 26.000</p>
                        <p className="pre">Con papas: $ 29.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>


                </article>
                <article className="articulo b2">
                    <div className="conpro">
                        <img className="comidas" src="../src/assets/Desgranados/Imagen2.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>DESGRANADO LEGEND</h2>
                        <p className="desc">Lomo de cerdo ahumado, pechuga de pollo, tocineta, queso costeño, maíz, patacón rallado o papitas fosforito, bollo, lechuga y salsa tártara</p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Con bollo: $ 28.000</p>
                        <p className="pre">Con papas: $ 31.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>


                <article className="articulo b3">
                    <div className="conpro">
                        <img className="comidas" src="../src/assets/Desgranados/Imagen3.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>DESGRANADO MIXTO</h2>
                        <p className="desc">Lomo de cerdo ahumado, pechuga de pollo, lomo de res, queso costeño, maíz, patacón rallado o papitas fosforito, bollo, lechuga y salsa tártara.</p>
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
                        <img className="comidas" src="../src/assets/Desgranados/Imagen4.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>ALITAS DISTRITO</h2>
                        <p className="desc">(12) alitas de pollo cubiertas de salsa BBQ o HOT BBQ Incluye papa a la francesa o cascos de papa</p>
                    </div>
                    <div className="conpro">
                        <p className="pre"> $ 35.000</p>

                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>


                <article className="articulo b5">
                    <div className="conpro">
                        <img className="comidas" src="../src/assets/Desgranados/Imagen5.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>PAPAS DISTRITO</h2>
                        <p className="desc">Papas a la francesa bañadas en salsa de queso cheddar , queso cheddar rallado y trocitos de tocineta crocante.</p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Normal: $ 25.000</p>

                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>
            </section>

            <section className="productos pizzas">
                <h1 className="titulo_sec"> Pizzas</h1>
                <article className="articulo c1">

                    <div className="conpro">
                        <img className="comidas" src="../src/assets/Pizzas/Imagen1.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>PEPPERONI AMERICANO</h2>
                        <p className="desc">Queso mozzarella con pepperoni americano</p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Personal: $ 22.000</p>
                        <p className="pre">Medium: $ 41.000</p>
                        <p className="pre">Large: $ 55.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>


                </article>
                <article className="articulo c2">
                    <div className="conpro">
                        <img className="comidas" src="../src/assets/Pizzas/Imagen2.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>4 QUESOS</h2>
                        <p className="desc">Queso mozzarella, queso azul, queso cheddar americano y queso parmesano.</p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Personal: $ 23.000</p>
                        <p className="pre">Medium: $ 44.000</p>
                        <p className="pre">Large: $ 59.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>


                <article className="articulo c3">
                    <div className="conpro">
                        <img className="comidas" src="../src/assets/Pizzas/Imagen3.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>HAWAIANA</h2>
                        <p className="desc">Queso mozzarella, jamón y piña.</p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Personal: $ 22.000</p>
                        <p className="pre">Medium: $ 40.000</p>
                        <p className="pre">Large: $ 55.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>


                <article className="articulo c4">
                    <div className="conpro">
                        <img className="comidas" src="../src/assets/Pizzas/Imagen4.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>4 CARNES</h2>
                        <p className="desc">Queso mozzarella, pepperoni, salami, pollo y tocineta.</p>
                    </div>
                    <div className="conpro">
                        <p className="pre">Personal: $ 26.000</p>
                        <p className="pre">Medium: $ 48.000</p>
                        <p className="pre">Large: $ 69.000</p>
                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>

            </section>



            <section className="productos perros">
                <h1 className="titulo_sec"> Perroooos</h1>
                <article className="articulo c1">

                    <div className="conpro">
                        <img className="comidas" src="../src/assets/Perros/Imagen1.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>DULCE CHIPOTLE</h2>
                        <p className="desc"> Pan, Salchicha, Queso cheddar, Cebolla caramelizada, Tocineta crispy,  Mix de lechuga, Cubos de tomateo ,Salsa dulce chipotle.</p>
                    </div>
                    <div className="conpro">
                        <p className="pre">$ 27.000</p>

                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>


                </article>
                <article className="articulo c2">
                    <div className="conpro">
                        <img className="comidas" src="../src/assets/Perros/Imagen2.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>JALAPEÑO DOG</h2>
                        <p className="desc">Pan, salchicha, pico de gallo, toxineta crispy, salsa roja, topping de panchos triturados</p>
                    </div>
                    <div className="conpro">
                        <p className="pre">$ 27.000</p>

                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>


                <article className="articulo c3">
                    <div className="conpro">
                        <img className="comidas" src="../src/assets/Perros/Imagen3.jpg" alt="" />
                    </div>
                    <div className="conpro">
                        <h2>DISTRITO DOG</h2>
                        <p className="desc">Pan, salchicha, queso holandes, champiñones, pimenton rostiz, tocineta crispy, salsa sweet mayo</p>
                    </div>
                    <div className="conpro">
                        <p className="pre">$ 27.000</p>

                    </div>
                    <div className="conpro">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                </article>


            </section>


        </>
    )


}