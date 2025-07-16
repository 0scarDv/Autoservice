import { useState } from 'react'

import { SideBar } from './Components/SideBar'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ListaClientes } from './Pages/Clientes/ListaClientes';
import { Home } from './Pages/Home';
import { ListaProductos } from './Pages/Productos/ListaProductos';

function App() {
  const [count, setCount] = useState(0)

  const routes = createBrowserRouter([
    {
      path: '/', element: <Home />, children: [
        { path: 'clientes', element: <ListaClientes /> },
        { path: 'productos', element: <ListaProductos />, children: [] }
      ]
    },


  ]);


  return (
    <RouterProvider router={routes} />
  )
}

export default App
