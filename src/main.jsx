import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import DashBoard from './pages/DashBoard';
import Products from './pages/Products';
import Blogs from './pages/Blogs';
import Categories from './pages/Categories';
import CreateCategories from './pages/Create/CreateCategories';
import Brands from './pages/Brands';
import CreateBrand from './pages/Create/CreateBrand';
import Error404 from './pages/Error404';
import ScrollToTop from './components/scrollToTop';

import './Css/master.css'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<DashBoard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/create" element={<CreateBrand />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/create" element={<CreateCategories />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <AppRoutes />
  // </React.StrictMode>
);