import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav className='border border-b-gray-500 mb-4'>
        <div className='container  px-4 flex justify-between mx-auto py-4  '>
            <div className='flex gap-x-4'>
            <Link  to="/" >Home</Link>
            <Link  to="/store" >Store</Link>
            <Link to="/about" >About</Link>
            </div>
            <button>Cart</button>
        </div>
        
    </nav>
  )
}

export default Navbar