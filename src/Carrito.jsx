import { useCarrito } from "./hooks/useCarrito";

export const Carrito = () => {


    const { contar, aumentar, disminuir, reiniciar } = useCarrito();

    return (

        <>

            <header>
                <section> <h2 className="Carrito">Carrito: {contar} </h2></section>
                <section>
                    <nav>
                        <ul>
                            <li className="item inicio">Inicio</li>
                            <li className="item nosotros">Nosotros</li>
                            <li className="item productos">Productos</li>
                            <li className="item contacto">Contacto</li>
                        </ul>
                    </nav>

                </section>



            </header>




            <button onClick={aumentar}> +1 </button>
            <button onClick={disminuir}> -1 </button>
            <button onClick={reiniciar}> Reiniciar </button>


        </>
    )





}