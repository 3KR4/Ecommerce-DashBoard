import { orderBy } from 'lodash'
import React from 'react'

export default function singleOrder() {
  return (
    <div className='singleOrder'>
      <div className="top">
        <div className="customer">
          <div className="info">
            <h2>{order.customer.name}</h2>
            <h3>{order.customer.email}</h3>
            <h3>{order.customer.phone}</h3>
          </div>
          <div className="address">
            <h3>city: {order.customer.address.city}</h3>
            <h3>streat: {order.customer.address.street}</h3>
            <h4>note: {order.notes}</h4>
          </div>
        </div>
        <div className="overview">
          <h2>Overview</h2>
          <h3>state: {order.processing}</h3>
          <div className="row">
            <h3>Total Items: {order.totalItems}</h3>
            <h3>Total Price: ${order.cartTotalPrice}</h3>
          </div>
          <h3>payment method: {order.payment.method}</h3>
          <h3>order date: 8 hours ago</h3>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <td>Product Name</td>
            <td>Image</td>
            <td>Product Price</td>
            <td>Category</td>
            <td>Quantity</td>
            <td>totalPrice</td>
          </tr>
        </thead>
        <tbody>
          {order.cart.map((product) => (
            <tr>
              <td>{product.productName}</td>
              <td>{product.image}</td>
              <td>{product.productPrice}</td>
              <td>{product.Category}</td>
              <td>{product.quantity}</td>
              <td>{product.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
