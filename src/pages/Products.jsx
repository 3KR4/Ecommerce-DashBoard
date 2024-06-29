import '../Css/showData.css';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { allProducts, brands, sort } from '../components/data';
import { Rating } from '@mui/material';
import { salePrice, under10Nums } from "../Methods";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import ReactPaginate from 'react-paginate';
import { FaAngleDown, FaSearch } from 'react-icons/fa';
import { allContext } from '../AllContext';

export default function Products() {
  const { openDeleteModel } = allContext();
  const fields = ['name', 'Images', 'price', 'category', 'reviews', 'brand', 'purchased', 'stock', 'actions'];
  
  const renderProductInfo = (product, field) => {
    let brand = brands.find((x) => x.id === product.brand.toLowerCase()) || { id: product.brand, img: null };
    switch (field) {
      case 'Images':
        return (
          <div className='images'>
            
              <div className='image'><img src={product.Images[0]} alt={`${product.name}`} /></div>

          </div>
        );
      case 'price':
        return (
          <div className='price'>
            <p className={product.stock === 0 ? 'last' : 'mainPrice'}>{product.stock !== 0 ? salePrice(product) : `Last Price: $${product.price.toFixed(2)}`}</p>
            {product.sale > 0 && product.stock !== 0 && (
              <>
                <p className="lastPrice">${product.price.toFixed(2)}</p>
                <p className='saleNum'>-{under10Nums(product.sale)}% OFF</p>
              </>
            )}
          </div>
        );
      case 'category':
        return (
          <div className='category'>
            <span>{product.category} /</span>
            {product.type}
          </div>
        );
      case 'reviews':
      return (
        <div className="review">
          <div className="stars">
            <Rating
              defaultValue={product.stars}
              precision={product.stars % 1 <= 0.7 ? 0.5 : 1}
              sx={{ fontSize: '21px', color: 'red' }}
              readOnly
            />
          </div>
          <p>{product.reviews > 0 ? `${product.reviews} Review` : `( There are no reviews yet )`}</p>
        </div>
      );
      case 'brand':
        return (
          <Link to={`/shop/${brand.id}`} className="brand">
            {!brand.img && <p>{product.brand.trim() ? brand.id : "Not available"}</p>}
            {brand.img ? <img src={brand.img} alt="" /> : null}
          </Link>
        );
      case 'stock':
        return (
            <span className='stock'   style={{
              background: product.stock === 0 ? '#ce3636' : product.stock < 7 ? '#ff8f00d9' : '',
              color: product.stock === 0 || product.stock < 7 ? 'white' : ''
            }}>
              {product.stock}
            </span>
        );
      case 'purchased':
        return (
            <span className='purchased'>
              150
            </span>
        );
      case 'actions':
        return (
          <div className="actions">
            <Link to={`/products/create?edit=${product.id}`}><FiEdit/></Link>
            |
            <RiDeleteBin6Line onClick={() => {
              openDeleteModel('product', 1)
            }}/>
          </div>
        );
      default:
      return product[field];
    }
  };

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect (() => {
    const endOffset = itemOffset + 10;
    setCurrentItems(allProducts.slice(itemOffset, endOffset));
    setPageCount (Math.ceil(allProducts.length / 10));
    }, [itemOffset, 10, allProducts]);
    const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % allProducts.length;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
    };


    const [openProductsSort, setopenProductsSort] = useState({
      sort: false,
      search: false,
    });

    const [productsSort, setProductsSort] = useState({
      sort: 'All Products',
      search: 'name',
    });

    const toggleProductsSort = (menu) => {
      setopenProductsSort(prevState => ({
        ...prevState,
        sort: menu === 'sort' ? !prevState['sort'] : false,
        search: menu === 'search' ? !prevState['search'] : false,
      }));
    };

    const handleShowChange = (key, value) => {
      setProductsSort(prevState => ({
        ...prevState,
        [key]: value
      }));
    };




  return (
    <div className='show-data container'>
      <div className="head">
        <h2 className="sectionTitle">All Products</h2>
        <div className='holder'>
          <div className="filters">
            <div className="select-holder" onClick={() =>
              toggleProductsSort('sort') 
            }>
            <h4>Sort by:</h4> 
              <span>{productsSort.sort} <FaAngleDown className={openProductsSort.sort && 'open'}/></span>
              <div className={`select ${openProductsSort.sort? 'active' : ''}`}>
                <li key='default' onClick={() => {
                  handleShowChange('sort', 'All Products');
                }} value='All Products'>All Products</li>
                <div className='holder'>
                  <ul>
                    {sort[0].slice(1,5).map((x) => (
                      <li key={x} onClick={() => {
                        handleShowChange('sort', x);
                      }} value={x}>{x}</li>
                    ))}
                  </ul>
                  <hr />
                  <ul>
                    {sort[0].slice(5,8).map((x) => (
                      <li key={x} onClick={() => {
                        handleShowChange('sort', x);
                      }} value={x}>State: {x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="searchInputHolder">
              <div className='inputHolder'>
                <h6 className="placeHolder" onClick={() => document.getElementById('chatSearchInput').focus()}>Search...</h6>
                <div className="holder">
                  <FaSearch />
                  <input
                    type="text"
                    id='chatSearchInput'
                    placeholder="Search..."
                  />
                </div>
              </div>
              <div className="select-holder" onClick={() =>
              toggleProductsSort('search') 
            }>
              <span>By: {productsSort.search} <FaAngleDown className={openProductsSort.search && 'open'}/></span>
                <ul className={`select ${openProductsSort.search? 'active' : ''}`}>
                  {sort[1].map((x) => (
                    <li key={x} onClick={() => {
                      handleShowChange('search', x);
                    }} value={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Link className='main-buttom' to='/products/create'>Create Product</Link>
        </div>
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
            {currentItems.map((product, index) => (
              <tr key={index}>
                {fields.map((field) => (
                  <td key={field}>
                    {renderProductInfo(product, field)}
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
    </div>
  );
}