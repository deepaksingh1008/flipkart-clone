import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import RecomdationCard from './components/card/RecomdationCard'
import Footer from './components/footer/Footer'
import Carousel from './components/carousel/Carousel'
import Hero from './components/hero/Hero'
import RelatedProduct from './components/reletedproduct/RelatedProduct'
import ProductDetail from './components/productdetails/ProductDetail'
import ProductDetails from './components/productdetails/ProductDetails'
import Cart from './components/cart/Cart'
import Registation from './registeration/Registation'
import { Routes, Route } from 'react-router-dom'
import Login from './registeration/Login'
import PrivateRoute from './privateRoute/PrivateRoute'
import { RiH1 } from 'react-icons/ri'
import AdminPrivateRoute from './privateRoute/AdminPrivateRoute'
import Dashboard from './admin/Dashboard'
import CreateCategory from './admin/CreateCategory'
import AddProduct from './admin/AddProduct'
import GetAllCategory from './admin/GetAllCategory'
import GetAllProduct from './admin/GetAllProduct';
import UpdateCategory from './admin/UpdateCategory';
import UpdateProduct from './admin/UpdateProduct';
import GetAllUser from './admin/GetAllUser'
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Hero />} />
          <Route path='/home' element={<h1>home page</h1>} />
        </Route>
        <Route element={<AdminPrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/create-product' element={<AddProduct />} />
          <Route path='/create-category' element={<CreateCategory />} />
          <Route path='/all-user' element={<GetAllUser />} />
          <Route path='/all-product' element={<GetAllProduct />} />
          <Route path='/all-category' element={<GetAllCategory />} />
          <Route path='/update-product/:id' element={<UpdateProduct />} />
          <Route path='/update-category/:slug/:id' element={<UpdateCategory />} />

        </Route>
        <Route path='/register' element={<Registation />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
