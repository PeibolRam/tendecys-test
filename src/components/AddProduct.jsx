import { useState } from 'react';
import '../styles/AddProduct.css'

export const AddProduct = ({ onNewItem }) => {
  const [formState, setFormState] = useState({
    sku: '',
    name: '',
    price: '',
    quantity: '',
  })

  const onInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setFormState({
      sku: '',
      name: '',
      price: '',
      quantity: '',
    })
    onNewItem(formState)
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Add new product</h3>
      <label>
        SKU:
        <input
          type="text"
          name="sku"
          value={formState.sku}
          onChange={onInputChange}
          required
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={onInputChange}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={formState.price}
          onChange={onInputChange}
          required
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          name="quantity"
          value={formState.quantity}
          onChange={onInputChange}
          required
        />
      </label>
      <button type="submit" onSubmit={onSubmit}>Enviar</button>
    </form>
  );

}
