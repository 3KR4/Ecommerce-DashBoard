import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

// Components
import SideBar from './SideBar';
import Header from './Header';

export default function App() {
  const [ sideBar, setSideBar ] = useState(false)
  const [mode, setMode] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.className = mode;
    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <>
      <SideBar sideBar={sideBar} setSideBar={setSideBar}/>
      <div className="main-content">
        <Header mode={mode} setMode={setMode} setSideBar={setSideBar}/>
        <Outlet/>
      </div>
    </>
  );
}