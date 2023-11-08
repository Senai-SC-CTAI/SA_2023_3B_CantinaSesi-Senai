import React from 'react'
import ReactDOM from 'react-dom/client'
//telas
import Home from './screens/Home'
import Login from './screens/Login'
import Gerenciamento from './screens/Gerenciamento'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { Sujestoes } from './screens/Sujestoes'
import Alimentos from './screens/Alimentos'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Login/>
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/gerenciar',
      element: <Gerenciamento />
    },
    {
      path: '/sujestoes',
      element: <Sujestoes />
    },
    {
      path: '/alimentos',
      element: <Alimentos />
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
