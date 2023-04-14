import { Link } from "react-router-dom"
import '../styles/RowTable.css'

export const RowTable = ({ orderNumber}) => {

  return (
      <li className="order-number">
        <Link to={`/orders/${orderNumber}`}>{orderNumber}</Link>
      </li>
  )
}
