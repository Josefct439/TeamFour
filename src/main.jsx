import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';



import { useNavigate, Outlet } from 'react-router-dom';

import Login from './Pages/Login';
import Signup from './pages/SignUp';
import { Carrito } from './Pages/Carrito';
import { Index } from './Pages/Index';
import { About } from './Pages/About';
import { Home } from './Pages/Home';
import { Menu } from './Pages/Menu';
import Contact from './Pages/Contact';
import { Gracias } from './Pages/Gracias';
import {Admin} from './Pages/Admin'
import { Novedades } from './Pages/Novedades';

const PrivateRoute = ({ element: Element, isAuth, ...rest }) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuth) {
      navigate("/login", { replace: true })
    }

  }, [isAuth, navigate])


  // Outlet nos permite establecer un slot o espacio vacío dentro de un componente, donde podemos renderizar el resultado de una ruta.
  return isAuth ? Element : <Outlet />;
}

const PublicRoute = ({ element: Element, isAuth, ...rest }) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuth) {
      navigate("/", { replace: true })
    }

  }, [isAuth, navigate])


  return !isAuth ? Element : <Outlet />;
}


const router = createBrowserRouter([

  {
    path: "/carrito",
    element: <PrivateRoute isAuth={localStorage.getItem("isLoggedIn") == "true"} element={<Carrito />} />
  },
  {
    path: "/home",
    element: <Home />
  },

  {
    path: "/login",
    element: <PublicRoute isAuth={localStorage.getItem("isLoggedIn") == "true"} element={<Login />} />
  },

  {
    path: "/singup",
    element: <Signup />
  },

  {
    path: "/about",
    element: <About />
  },

  {
    path: "/menu",
    element: <Menu />
  },
  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/gracias",
    element: <Gracias />,
  },

  {
    path: "/admin",
    element: <Admin />,
  },

  {
    path: "/novedades",
    element: <Novedades />,
  },

  {
    path: "/",
    element: <PublicRoute isAuth={localStorage.getItem("isLoggedIn") == "true"} element={<Index />} />
  },

]);


ReactDOM.createRoot(document.querySelector('#root')).render(
  <RouterProvider router={router} />


)



