import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/navbar'
import Landingpage from './Components/landingPage/landing-page'
import Products from './Components/Product/products'
import Footer from './Components/Footer/footer'

const App = () => {
  return (
   <>
   <Navbar/>
   <Landingpage/>
   <Products/>
   <Footer/>
   </>
  )
}

export default App


