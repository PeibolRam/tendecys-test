import { useState } from "react"
import { useParams } from "react-router-dom"
import Swal from 'sweetalert2'
import { useFetchOrders } from "../hooks/useFetchOrders"
import { findOrder } from '../helpers/findOrder'
import { AddProduct } from "./AddProduct"
import { Navbar } from "./Navbar"

import '../styles/OrderInfo.css'

export const OrderInfo = () => {
  const params = useParams()
  const { orders, isLoading } = useFetchOrders()
  const order = findOrder(orders, params.orderid)
  const [itemsInOrder, setItemsInOrder] = useState([])

  const onAddItem = (newItem) => {
    setItemsInOrder([newItem, ...itemsInOrder])
    //simula hacer metodo push en la API 
  }

  const paidOrder = () => {
    Swal.fire(
      'Successful payment', 'Your payment was successful, thank you for your purchase', 'success'
    )
  }

  return (
    <>

      <Navbar />
      <div className='main-container'>
        {
          isLoading ?
            (<h2>Cargando...</h2>) :
            (
              <>
                <div className="table-container">
                  <h2>Order Number: {params.orderid}</h2>
                  <button onClick={()=>paidOrder()}>Pay</button>
                  <table>
                    <thead>
                      <tr>
                        <th>SKU</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        order.items.map(item => (
                          <tr key={item.id}>
                            <td>{item.sku}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                          </tr>
                        ))
                      }
                      {
                        itemsInOrder.length >= 1 && (
                          <>
                            {itemsInOrder.map(item => (
                              <tr key={Math.random()}>
                                <td>{item.sku}</td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                              </tr>
                            ))}
                          </>
                        )
                      }
                    </tbody>
                  </table>
                </div>
                <AddProduct
                  onNewItem={event => onAddItem(event)}
                />
              </>
            )
        }
      </div>
    </>
  )
}
