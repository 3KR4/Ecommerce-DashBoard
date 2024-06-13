import React, { useState } from 'react'
import '../Css/blogs-brands-categories.css'
import { Link } from 'react-router-dom'
import { brands } from '../components/data'

import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";

export default function Brands() {
  const [ activeBrand, setActiveBrand] = useState('')

  return (
    <div className='brands-page container'>
      <div className="head">
          <h2 className="sectionTitle">All Brands</h2>
          <Link className='main-buttom' to='/brands/create'>Create Brand</Link>
      </div>
      <div className="brands">
        {brands.map((brand) => (
            <div className={`card ${activeBrand == brand.id ? 'active' : ''}`} key={brand.id}>
              <div className='title'>
                <img src={brand.img} alt="" />
                  <div className="actions">
                    <Link to={`/brands/create?edit=${brand.id}`}><FiEdit/></Link>|
                    <RiDeleteBin6Line/>
                  </div>
              </div>
              <ul>
                {brand.produce.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <FaAngleDown className='angle' onClick={() => setActiveBrand((perv) => perv === brand.id ? '' : brand.id)}/>
            </div>
          ))}
      </div>
    </div>
  )
}