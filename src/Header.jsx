import React from 'react';
import { Link } from 'react-router-dom';
import { allContext } from './AllContext'; // Import allContext hook
import logo from './img/logo.png';
import { HiBars3 } from 'react-icons/hi2';
import { FaAngleDown } from 'react-icons/fa';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

export default function Header({ setSideBar }) {
  const { theme, toggleTheme } = allContext(); // Use allContext hook to get theme and toggleTheme

  return (
    <div className='header'>
      <HiBars3 className='headerBar' onClick={() => setSideBar(true)} />
      <Link className='logo' to={`/`}>
        <img src={logo} alt='logo' />
        <h3>Tech<span>Trove</span></h3>
      </Link>
      <div className='holder' style={{ flexDirection: true ? 'row-reverse' : 'row' }}>
        {true ? (
          <div className='user'>
            <img
              src={require('./img/userimg.png')} // Ensure correct path to user image
              alt='User'
            />
            <h5>Mahmoud Elshazly</h5>
            <FaAngleDown />
          </div>
        ) : (
          <div className='signBtns'>
            <Link to='/Register'>Register</Link>
            {' | '}
            <Link to='/Login'>Login</Link>
          </div>
        )}
        {theme === 'light' ? (
          <LightModeOutlinedIcon onClick={toggleTheme} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggleTheme} />
        )}
      </div>
    </div>
  );
}
