import * as React from 'react';
import { useTheme } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

// @ts-ignore
import logo from './img/logo.png'
import { HiBars3 } from "react-icons/hi2";

//ICONS
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { FaAngleDown } from "react-icons/fa6";

export default function Header({mode, setMode, setSideBar}) {

  return (
    <div className='header'>

          <HiBars3 className='headerBar' onClick={() => {setSideBar(true)}}/>
          <Link className='logo' to={`/`}>
            <img src={logo} alt="logo" />
            <h3>Tech<span>Trove</span></h3>
          </Link>
        <div className="holder" style={{flexDirection: true ? 'row-reverse' : 'row'}}>
          {true ? 
            (
              <div className="user">
              <img src={require(
// @ts-ignore
              './img/userimg.png')} alt="" />
              <h5>Mahmoud Elshazly</h5>
              <FaAngleDown/>
            </div>
            ) 
              : 
            (
              <div className="signBtns">
              <Link to="/Register">Register</Link>
              |
              <Link to="/Login">Login</Link>
              </div>
            )
          }
            {mode === "light" ?
              <LightModeOutlinedIcon onClick={(params) => {
                setMode((prevMode) =>
                  prevMode === 'light' ? 'dark' : 'light',
                );
                localStorage.setItem("theme", "dark")
              }
              }/>
            :
              <DarkModeOutlinedIcon onClick={(params) => {
                setMode((prevMode) =>
                  prevMode === 'light' ? 'dark' : 'light',
                );
                localStorage.setItem("theme", "light")
              }
              }/>
            }
        </div>
    </div>
  )
}