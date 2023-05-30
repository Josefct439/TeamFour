
import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { FirebaseAuth } from '../Firebase/config'
import { NavLink, useNavigate } from 'react-router-dom'



const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(FirebaseAuth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                localStorage.setItem("isLoggedIn", "true")
                localStorage.setItem("accessToken", user["accessToken"])
                localStorage.setItem("email", user["email"])
                

                navigate("/")
                console.log(user)


            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
       
    }
 
    return(
        <>

            <main >        
                <section>
                    <div>                                            
                        <h1> ¡¡Inicia sesion!! </h1>                       
                                                       
                        <form>                                              
                            <div>
                                <label htmlFor="email-address">
                                    Correo/Usuario: 
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Contraseña:
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div>
                                <button                                    
                                    onClick={onLogin}                                        
                                >      
                                    Iniciar                                                                
                                </button>
                            </div>                               
                        </form>
                       
                        <p className="text-sm text-white text-center">
                            ¿No tienes cuenta aun? {' '}
                            <NavLink to="/singup">
                                Registrate
                            </NavLink>
                        </p>
                                                   
                    </div>
                </section>
            </main>
        </>
    )
}
 
export default Login
