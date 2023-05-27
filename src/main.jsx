import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import { Home } from './hooks/Home';
import { About } from './hooks/About';
import { Carrito } from './Carrito';
import { Index } from './hooks/Index';







const router = createBrowserRouter([
    {
        path: "/carrito",
        element: <Carrito/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/index",
        element: <Index/>
    },
]);


ReactDOM.createRoot(document.querySelector('#root')).render(
    <RouterProvider router={router}/>


)



