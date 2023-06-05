import React from "react";
import { HeaderMenu } from "../hooks/HeaderMenu";
import { useCarrito } from "../hooks/useCarrito";

export const Novedades = () => {

    const { contar, aumentar, disminuir, reiniciar } = useCarrito()

    localStorage.setItem("contador", [contar])

    return (
        <>
            <HeaderMenu />

            <section className="pronove">

                <article className="novedad">
                    <img className="imgnove" src="../src/assets/Hamburguesas/Imagen8.jpg" alt="" />
                </article>

                <article className="novedad">
                    <h1 className="titulo_sec"> La Insolente</h1>
                    <div>
                        <p className="desno">
                            Pan de papa artesanal, carne brangus americana, tocineta Ahumada, queso crema, queso mozzarella crocante, reducción de piña en mantequilla, mayonesa de ajo.
                        </p>
                    </div>
                    <div className="precioNov">
                        <p className="preno">Normal: $ 29.000</p>
                        <p className="preno">Con papas a la Francesa: $ 34.000</p>
                    </div>
                    <div className="conproNov">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                    <div className="notas">
                        <p>*No incluye el precio de los adicionales, entre los adicionales disponibles se encuentra, papas a la francesa, papa casco, tocineta ahumada, salchicha ahumada, queso cheddar, queso costeño crocante, etc. Al momento de realizar el pedido, uno de nuestros vendedores se comunicará con usted indicando los precios y disponibilidad de adicionales.</p>
                    </div>
                </article>
            </section>

            <section className="pronove">

                <article className="novedad">
                    <img className="imgnove" src="../src/assets/Hamburguesas/Imagen9.jpg" alt="" />
                </article>

                <article className="novedad">
                    <h1 className="titulo_sec"> Una Indecente</h1>
                    <div>
                        <p className="desno">
                            Pan de papa artesanal, carne brangus americana, salchicha ahumada a la parrilla, salsa artesanal de queso cheddar, trocitos de tocineta ahumada crocante, cebolla caramelizada en azúcar morena, mayo de ajo, salsa inmoral.
                        </p>
                    </div>
                    <div className="precioNov">
                        <p className="preno">Normal: $ 29.000</p>
                        <p className="preno">Con papas a la Francesa: $ 34.000</p>
                    </div>
                    <div className="conproNov">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                    <div className="notas">
                        <p>*No incluye el precio de los adicionales, entre los adicionales disponibles se encuentra, papas a la francesa, papa casco, tocineta ahumada, salchicha ahumada, queso cheddar, queso costeño crocante, etc. Al momento de realizar el pedido, uno de nuestros vendedores se comunicará con usted indicando los precios y disponibilidad de adicionales.</p>
                    </div>
                </article>
            </section>


            <section className="pronove">

                <article className="novedad">
                    <img className="imgnove" src="../src/assets/Perros/Imagen4.jpg" alt="" />
                </article>

                <article className="novedad">
                    <h1 className="titulo_sec"> Hot dog Decadente</h1>
                    <div>
                        <p className="desno">
                            Pulled pork ahumado por largas horas en 3 tipos de madera, salchicha ahumada, bañado en bbq secreta, queso cheddar, cebolla caramelizada en azúcar morena, tocineta ahumada trocitos, cebolla crocante, queso mozzarella apanado, salsa inmoral.
                        </p>
                    </div>
                    <div className="precioNov">
                        <p className="preno">Normal: $ 27.000</p>
                        <p className="preno">Con papas a la Francesa: $ 32.000</p>
                    </div>
                    <div className="conproNov">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                    <div className="notas">
                        <p>*No incluye el precio de los adicionales, entre los adicionales disponibles se encuentra, papas a la francesa, papa casco, tocineta ahumada, salchicha ahumada, queso cheddar, queso costeño crocante, etc. Al momento de realizar el pedido, uno de nuestros vendedores se comunicará con usted indicando los precios y disponibilidad de adicionales.</p>
                    </div>
                </article>
            </section>

            <section className="pronove">

                <article className="novedad">
                    <img className="imgnove" src="../src/assets/Desgranados/Imagen7.jpg" alt="" />
                </article>

                <article className="novedad">
                    <h1 className="titulo_sec">Papas Inmoral</h1>
                    <div>
                        <p className="desno">
                        Carne brangus americana(estilo hamburguesa en trocitos), cebolla crocante, salsa artesanal de queso cheddar, queso crema, tocineta Ahumada, Reducción de piña en mantequilla, papa crocante.
                        </p>
                    </div>
                    <div className="precioNov">
                        <p className="preno">Normal: $ 30.000</p>
                        <p className="preno">Con Queso Costeño Crocante : $ 35.000</p>
                    </div>
                    <div className="conproNov">
                        <button onClick={aumentar} className="button_login" >Añadir al carrito</button>
                    </div>
                    <div className="notas">
                        <p>*No incluye el precio de los adicionales, entre los adicionales disponibles se encuentra, papas a la francesa, papa casco, tocineta ahumada, salchicha ahumada, queso cheddar, queso costeño crocante, etc. Al momento de realizar el pedido, uno de nuestros vendedores se comunicará con usted indicando los precios y disponibilidad de adicionales.</p>
                    </div>
                </article>
            </section>

        </>
    )






}

