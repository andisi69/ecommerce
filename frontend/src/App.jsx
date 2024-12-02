import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import Product from './pages/Product';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/verify';


const App = () => {
  return (
    <div className='w-full'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/verify' element={<Verify />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
