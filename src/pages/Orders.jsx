import '../Css/showData.css';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { orders } from '../components/data';
import ReactPaginate from 'react-paginate';
import { FaEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoClose } from 'react-icons/io5';

const paymentColors = {
  'PayPal': '#2a84ff',
  'Credit Card': '#ff6549',
  'Debit Card': '#8e44ad',
  'Other': '#28ae4a'
};
const ordersColors = {
  'Processing': '#2a84ff',
  'Delivered': '#28ae4a',
};

export default function Orders() {
  const fields = ['customer', 'total items', 'total price', 'payment', 'shipping', 'status', 'date', 'actions'];
  const [openModel, setOpenModel] = useState(false);
  const [order, setOrder] = useState({});
  
  // Pagination state
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + 14;
    setCurrentItems(orders.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(orders.length / 14));
  }, [itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 14) % orders.length;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };

  const renderProductInfo = (purchase, field) => {
    switch (field) {
      case 'customer':
        return <h4 className='customer'>{purchase.customer.name}</h4>;
      case 'total items':
        return (
          <h4 className='totalItems'>
            {purchase.totalItems < 10 ? `0${purchase.totalItems}` : purchase.totalItems} {purchase.totalItems === 1 ? 'Item' : 'Items'}
          </h4>
        );
      case 'total price':
        return <h4 className='cartTotalPrice'>${purchase.cartTotalPrice.toFixed(2)}</h4>;
      case 'payment':
        return <h4 className='payment' style={{ color: paymentColors[purchase.payment] || paymentColors['Other'] }}>{purchase.payment}</h4>;
      case 'shipping':
        return <h4 className='shipping' style={{ color: purchase.shipping.method === 'Express' ? '#2a84ff' : '' }}>{purchase.shipping.method}</h4>;
      case 'status':
        return <h4 className='orderStatus' style={{ color: ordersColors[purchase.orderStatus] }}>{purchase.orderStatus}</h4>;
      case 'date':
        return <h4 className='orderDate'>2 Days Ago</h4>;
      case 'actions':
        return (
          <div className="actions">
            <FaEye onClick={() => {
              setOpenModel(true);
              setOrder(purchase);
            }}/>
            |
            <FiEdit/>
            |
            <RiDeleteBin6Line/>
          </div>
        );
      default:
        return purchase[field];
    }
  };

  return (
    <div className='show-data purchases container'>
      <div className="head">
        <h2 className="sectionTitle">All Purchases</h2>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              {fields.map((field, index) => (
                <th key={index}>{field}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((purchase, index) => (
              <tr key={index}>
                {fields.map((field) => (
                  <td key={field}>
                    {renderProductInfo(purchase, field)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="paginationHolder">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
        />
      </div>
      <div className={`model ${openModel ? 'active' : ''}`}>
        <div className="holder container">
          <h3>Order Details <IoClose onClick={() => setOpenModel(false)} /></h3>
          {order.customer && (
            <>
              <div className="top">
                  <div className="info">
                    <h3>Customer</h3>
                    <h4>name: <span>{order.customer.name}</span></h4>
                    <h4>email: <span>{order.customer.email}</span></h4>
                    <h4>phone: <span>{order.customer.phone}</span></h4>
                  </div>
                  <div className="address">
                    <h3>address</h3>
                    <h4>City: <span>{order.customer.address.city}</span></h4>
                    <h4>Street: <span>{order.customer.address.street}</span></h4>
                    <h4>Note: <span>{order.notes}</span></h4>
                  </div>
                <div className="overview">
                  <h3>Overview</h3>
                  <h4>Status: <span>{order.orderStatus}</span></h4>
                  <div className="row">
                    <h4>Total Items: <span>{order.totalItems < 10 ? `0${order.totalItems}` : order.totalItems}</span></h4>
                    |
                    <h4>Total Price: <span>${order.cartTotalPrice.toFixed(2)}</span></h4>
                  </div>
                  <h4>Payment Method: <span>{order.payment}</span></h4>
                  <h4>Order Date: <span>8 hours ago</span></h4>
                </div>
              </div>
              <h3 className='secondTitle'>Order Products</h3>
              <div className="modelTable">
                <table>
                  <thead>
                    <tr>
                      <td>Product Name</td>
                      <td>Image</td>
                      <td>Product Price</td>
                      <td>Category</td>
                      <td>Quantity</td>
                      <td>Total Price</td>
                    </tr>
                  </thead>
                  <tbody>
                    {order.cart.map((product, index) => (
                      <tr key={index}>
                        <td>{product.productName}</td>
                        <td><img src={product.image} alt={product.productName} /></td>
                        <td>
                          <div className='price'>
                            <p className='mainPrice'>${(product.productPrice - (product.productPrice * product.sale / 100)).toFixed(2)}</p>
                            {product.sale > 0 && (
                              <>
                                <p className="lastPrice">${product.productPrice.toFixed(2)}</p>
                                <p className='saleNum'>-{product.sale < 10 ? '0' + product.sale : product.sale}% OFF</p>
                              </>
                            )}
                          </div>
                        </td>
                        <td>        
                          <div className='category'>
                            <span>{product.category} /</span>
                            {product.type}
                          </div>
                        </td>
                        <td>{product.quantity < 10 ? `0${product.quantity}`: product.quantity}</td>
                        <td>${product.totalPrice.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
