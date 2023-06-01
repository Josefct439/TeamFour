
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
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
                
                navigate("/carrito")
                console.log(user)


            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    return (
        <>
            <body className='body_login'>


                <main >
                    <section className='container'>
                        <div className="login_container">
                            <h1 className="titulo"> ¡¡Inicia sesión!! </h1>

                            <form className='formulario'>
                                <div className="divisiones">

                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="Email"
                                        className='ho'
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="divisiones">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        placeholder="Contraseña"
                                        className='ho'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="divisiones">
                                    <button className='button_login'
                                        onClick={onLogin}
                                    >
                                        Iniciar
                                    </button>
                                </div>
                            </form>

                            <p className="registro">
                                ¿Primera vez en Instant Food? {' '}
                                <NavLink className="formulario" to="/singup">
                                    Regístrate ahora
                                </NavLink>
                            </p>

                        </div>
                    </section>
                </main>
            </body>
        </>
    )
}

export default Login
