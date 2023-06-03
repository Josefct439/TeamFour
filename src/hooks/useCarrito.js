import { useState } from "react";


export const useCarrito = (inicial = localStorage.getItem("contador")) => {

    if (inicial = NaN){
        inicial = 0
    }
    
    inicial = parseInt(inicial);


    const [contar, setContar ] = useState(inicial)


    const aumentar = () => {
        setContar (contar + 1);
    }

    const disminuir = () => {
        if(contar === 0) return;
        setContar (contar - 1);
    }

    const reiniciar = () => {
        setContar (0);
        localStorage.setItem("contador");   
    }

    return{
        contar,
        aumentar,
        disminuir,
        reiniciar
    }
}