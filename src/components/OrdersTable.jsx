import { useFetchOrders } from '../hooks/useFetchOrders'
import { RowTable } from './RowTable'

import '../styles/OrdersTable.css'

export const OrdersTable = () => {
  const { orders, isLoading } = useFetchOrders()

  return (
    <>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className='main-container'>
        <h1>Order list:</h1>
        <ul>
            {
              orders.map(order => (
                <RowTable
                  key={order.id}
                  orderNumber={order.number}
                />
              ))
            }
        </ul>
      </div>
    </>
  )
}
