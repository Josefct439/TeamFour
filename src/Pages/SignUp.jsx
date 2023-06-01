import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from '../Firebase/config'

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    const [password2, setPassword2] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(FirebaseAuth, email, password, name)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/registro")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });


    }

    return (
        <main >
            <section>
                <div className='container'>
                    <div className="login_container">
                        <h1 className="titulo"> Crear cuenta Instand</h1>
                        <form className='formulario'>
                            <div className="divisiones">
                                <input
                                    type="name"
                                    label="idname"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className='ho'
                                    placeholder="Nombre completo"
                                />
                            </div>
                            <div className="divisiones">
                                <input
                                    type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className='ho'
                                    placeholder="Email"
                                />
                            </div>

                            <div className="divisiones">

                                <input
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className='ho'
                                    placeholder="Contraseña"
                                />
                            </div>

                            <div className="divisiones">

                                <input
                                    type="password"
                                    label="verify password"
                                    value={password2}
                                    onChange={(e) => setPassword2(e.target.value)}
                                    required
                                    className='ho'
                                    placeholder="Repetir contraseña"
                                />
                            </div>

                            <div className="divisiones">
                                <button
                                    className='button_login'
                                    type="submit"
                                    onClick={onSubmit}
                                >
                                    Registrarse
                                </button>
                            </div>

                        </form>

                        <p className="registro">
                            ¿Ya tienes una cuenta?{' '}
                            <NavLink className="formulario" to="/login" >
                                Iniciar Sesión
                            </NavLink>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Signup