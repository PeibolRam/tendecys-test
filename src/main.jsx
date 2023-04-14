import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import { App } from './App'
import { OrderInfo } from './components/OrderInfo'
import './styles.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path:'orders/:orderid',
    element: <OrderInfo />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

