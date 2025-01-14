import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CreateArticles from '../components/CreateArticles'

const Commande = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar/>
    <div className="flex-grow">
    <CreateArticles/>
    </div>
    <Footer/>
    </div>
  )
}

export default Commande