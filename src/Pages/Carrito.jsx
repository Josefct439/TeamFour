import { useCarrito } from "../hooks/useCarrito";
import { HeaderMenu } from "../hooks/HeaderMenu";
export const Carrito = () => {


    const { contar, aumentar, disminuir, reiniciar } = useCarrito();


    


    return (
         <>
         <HeaderMenu/>

            <header>
                <section> <h2 className="Carrito">Carrito: {contar}  </h2></section>
            </header>


            <button onClick={aumentar}> Añadir al carrito </button>
            <button onClick={disminuir}> Quitar del carrito </button>
            <button onClick={reiniciar}> Vaciar carrito </button>


        </>
    )
}
export default Carrito