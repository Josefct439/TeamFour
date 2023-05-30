import { Navigate } from "react-router-dom";

export const useChange = () => {

  

    const about = () => {
        <Navigate to = "/about"/>
    }
    
    return(
        about
    )

}
