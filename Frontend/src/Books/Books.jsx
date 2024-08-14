import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Book from '../Components/Book'


const Books = () => {
  return (
    <>
        <Navbar />
        <div className='min-h-screen'>
            <Book />
        </div>
        <Footer />
    </>
  )
}

export default Books