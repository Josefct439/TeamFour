import { useState } from "react";


export const useCarrito = (inicial = 0) => {


    const [contar, setContar ] = useState(inicial)


    const aumentar = () => {
        setContar (contar + 1);
    }

    const disminuir = () => {
        if(contar === 0) return;
        setContar (contar - 1);
    }

    const reiniciar = () => {
        setContar (inicial);
    }

    return{
        contar,
        aumentar,
        disminuir,
        reiniciar
    }
}