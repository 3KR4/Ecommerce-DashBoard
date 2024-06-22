import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

// @ts-ignore
import logo from './img/logo.png'
//icons
import { FaHome, FaUsers, FaRegComments } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { IoAnalyticsSharp } from "react-icons/io5";
import { LiaBlogSolid } from "react-icons/lia";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { HiBars3 } from "react-icons/hi2";
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import CategoryIcon from '@mui/icons-material/Category';
import { TbBrandSentry } from "react-icons/tb";

export default function SideBar({sideBar, setSideBar}) {

  return ( 
      <div className={`sidebar ${sideBar ? 'open' : ''}`}>
        <ul>
          <li className='bar'>
            {sideBar ? (<><h4>Menu</h4> <FaAngleLeft onClick={() => {setSideBar(false)}}/></>) : (<HiBars3 onClick={() => {setSideBar(true)}}/>)}
          </li>

          <li><NavLink to='/'><DisplaySettingsIcon/> <span> DashBoard</span></NavLink></li>
          <li><NavLink to='/landing'><FaHome/> <span> Landing</span></NavLink></li>
          <hr/>
          <li><NavLink to='/products'><AppRegistrationIcon/> <span> Products</span></NavLink></li>
          <li><NavLink to='/blogs'><LiaBlogSolid/> <span> Blogs</span></NavLink></li>
          <hr/>
          <li><NavLink to='/categories'><CategoryIcon/> <span> Categories</span></NavLink></li>
          <li><NavLink to='/brands'><TbBrandSentry/> <span> Brands</span></NavLink></li>
          <hr/>
          <li><NavLink to='/chat'><FaRegComments/> <span> Chats</span></NavLink></li>
          <li><NavLink to='/orders'><IoAnalyticsSharp/> <span> Orders</span></NavLink></li>
          <hr/>
        </ul> 
      </div>
  )
}