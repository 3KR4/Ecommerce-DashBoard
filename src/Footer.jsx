import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@mui/material';
// @ts-ignore
import logo from './img/logo.png'
// @ts-ignore
import credit from './img/credit-cards-footer.png'

import { Link, NavLink } from 'react-router-dom';
import { types, Products } from './components/data';

import { PiClockCountdownFill } from "react-icons/pi";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";

import { FaTwitter, FaFacebook, FaTiktok, } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';
import GrainOutlinedIcon from '@mui/icons-material/GrainOutlined';

export default function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="top-footer">
          <div className="logo">        
            <Link to={`/`}>
              <img src={logo} alt="logo" />
              <h3>Tech<span>Trove</span></h3>
            </Link>
          </div>
            <div className="holder">
              <div className="Subscribe ">
                <h4>Subscribe to our Newsletter</h4>
                <p>Get all the latest information, Sales and Offers.</p>
            </div>
            <div className="input">
                <input name="EMAIL" placeholder="Email address here..." type="email"/>
                <button className="main-buttom">Subscribe<span className="dir-part"></span></button>
            </div>
            </div>

        </div>
        <div className="middle-footer">
          <div className="with-us">
            <h1>Get In Touch With Us</h1>
            <ul>
              <li>
                <FaLocationDot style={{fontSize: '20px'}}/>
                <h3>2091 nasr city / cairo</h3>
              </li>
              <li>
                <FaPhoneVolume />
                <h3>Phone: +201150865211</h3>
              </li>
              <li>
                <PiClockCountdownFill style={{fontSize: '25px'}}/>
                <h3>Open Time: 
                  10.00 am - 6.00 pm
                </h3>
              </li>
              <li><IoIosMailUnread style={{fontSize: '25px'}}/> <h3>support@shopgrids.com</h3></li>
            </ul>
          </div>
          <div className="another">
            <h1>Information</h1>
            <ul>
              <a href=""><HomeOutlinedIcon/><li>Home</li></a>
              <a href=""><PeopleAltOutlinedIcon/><li>About Us</li></a>
              <a href=""><MarkEmailUnreadOutlinedIcon/><li>Contact Us</li></a>
              <a href=""><SpeakerNotesOutlinedIcon/><li>Blog</li></a>
              <a href=""><GrainOutlinedIcon/><li>Special Offer</li></a>
            </ul>
          </div>
          <div className="another">
            <h1>Categories</h1>
            <ul>
              {types.map((x) => (
                x.id !== 'Other' && (
                  <a href="#" key={x.id}>
                    <li>{x.id}</li>
                  </a>
                )
              ))}
            </ul>
          </div>
          <div className="another">
            <h1>Shop Departments</h1>
            <ul>
              <a href=""><li>Computers & Accessories</li></a>
              <a href=""><li>Smartphones & Tablets</li></a>
              <a href=""><li>TV, Video & Audio</li></a>
              <a href=""><li>Cameras, Photo & Video</li></a>
              <a href=""><li>Headphones</li></a>
            </ul>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="visa">
            <h3>We Accept:</h3>
            <img src={credit} alt=""/>
          </div>
          <h3>Designed and Developed byGrayGrids</h3>
          <div className="follow">
            <h5>Follow us at</h5> | 
            <div className="social">
              <FaFacebook  />
              <FaTwitter  />
              <BiLogoInstagramAlt />
              <FaTiktok  />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
