import React from 'react';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/home'
import Navbar from './layouts/navbar'
import ErrorPage from './pages/error/error'
import Footer from './layouts/footer'
import ShopPage from './pages/shop/shop'
import BlogPage from './pages/blog/blog'
import AboutPage from './pages/about/about'
import ContactPage from './pages/contact/contact'
import AccessPage from './pages/access/access'
import FeaturesPage from './pages/features'
import SalePage from './pages/sale'
import { CartProvider } from './context/CartContext'

const App = () => {
  return (
    <CartProvider>
      <Navbar />

      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/access" element={<AccessPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/sale" element={<SalePage />} />
      </Routes>

      <Footer />
    </CartProvider>
  );
};

export default App;
