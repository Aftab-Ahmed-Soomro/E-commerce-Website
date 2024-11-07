import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center px-8 pt-8'>
      <div className='flex justify-center items-center'>
      <div>
        <img src="./Assets/Imgs/logo.svg" alt="" />
      </div>
      <div>
        <ul className='flex justify-center items-center gap-6 ms-10'>
          <li className='text-lg'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='text-lg'>
            <NavLink to='/product'>Product</NavLink>
          </li>
          <li className='text-lg'>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>
      </div>
      <div>
        <NavLink to="/contact"><h6 className='text-lg font-medium'>Sign In</h6></NavLink>
      </div>
    </div>
  )
}

export default Header
