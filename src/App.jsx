// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './AllContext'; // Import your ThemeProvider

// Import components for routing
import DashBoard from './pages/DashBoard';
import Landing from './pages/Landing';
import Products from './pages/Products';
import CreateProducts from './pages/Create/CreateProducts';
import Blogs from './pages/Blogs';
import CreateBlogs from './pages/Create/CreateBlogs';
import Categories from './pages/Categories';
import CreateCategories from './pages/Create/CreateCategories';
import Brands from './pages/Brands';
import CreateBrand from './pages/Create/CreateBrand';
import Chat from './pages/Chat';
import Orders from './pages/Orders';
import Error404 from './pages/Error404';
import DeleteModel from './components/DeleteModel';

// Components
import SideBar from './SideBar';
import Header from './Header';

const App = () => {
  const [sideBar, setSideBar] = React.useState(false);

  return (
    <ThemeProvider>
        <SideBar sideBar={sideBar} setSideBar={setSideBar} />
        <div className="main-content">
          <Header setSideBar={setSideBar} />
          <DeleteModel />
          <Routes>
            <Route index element={<DashBoard />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/create" element={<CreateProducts />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/create" element={<CreateBlogs />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/brands/create" element={<CreateBrand />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/create" element={<CreateCategories />} />
            <Route path="/chat" element={<Chat />} /> 
            <Route path="/orders" element={<Orders />} /> 
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
    </ThemeProvider>
  );
};

export default App;
