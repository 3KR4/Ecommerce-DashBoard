import '../Css/blogs-brands-categories.css'
import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {categories} from '../components/data'

import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Categories () {
  
  return (
    <div className='categories-page container'>
      <div className="head">
          <h2 className="sectionTitle">All Categories</h2>
          <Link className='main-buttom' to='/categories/create'>Create Categories</Link>
      </div>
      <div className="megaMenu">
        {categories.map((category) => (
          <div className="card" key={category.id}>
            <div className='title'>
              {category.id}
              
                <div className="actions">
                <Link to={`/categories/create?edit=${category.id}`}><FiEdit/></Link>
                  <RiDeleteBin6Line/>
                </div>
            </div>
            <ul>
              {category.list.map((item) => (
                <li key={item.id}>{item.id}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
