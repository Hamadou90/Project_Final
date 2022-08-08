import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { CgShoppingCart, CgCloseO } from 'react-icons/cg';
import { HiMinusCircle, HiPlusCircle } from 'react-icons/hi';
import { RiAccountCircleFill } from 'react-icons/ri';
import { BsCart4 } from 'react-icons/bs';
import { useRouter } from 'next/router';


const NavBar = ({ logout, user }) => {

  const [dropdown, setDropdown] = useState(false);

  const ref = useRef();

  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10'>
      <div className="logo mr-auto md:mx-5">
        <Link href={'/'}>
          <a><Image src="/logo5.jpg" alt="Logo Here" width={100} height={40} /></a>
        </Link>
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-4 font-bold md:text-md'>
          <Link href={"/packages"}><a><li className='hover:text-red-500'>Packages</li></a></Link>
          <Link href={"/destinations"}><a><li className='hover:text-red-500'>Destinations</li></a></Link>
          <Link href={"/about"}><a><li className='hover:text-red-500'>About</li></a></Link>
          <Link href={"/contact"}><a><li className='hover:text-red-500'>Contact Us</li></a></Link>
        </ul>
      </div>
      <div className="cursor-pointer cart items-center absolute right-0 top-4 mx-5 flex">
        <a onMouseOver={() => { setDropdown(true); }} onMouseLeave={() => { setDropdown(false); }}>
          {dropdown && <div onMouseOver={() => { setDropdown(true); }} onMouseLeave={() => { setDropdown(false); }} className="absolute top-6 right-6 bg-white shadow-lg border rounded-md px-6 py-4 w-36">
            <ul>
              <Link href={'/myaccount'}><a><li className='py-1 text-sm hover:text-red-700 font-bold'>My Account</li></a></Link>
              <Link href={'/bookings'}><a><li className='py-1 text-sm hover:text-red-700 font-bold'>My Bookings</li></a></Link>
              <li onClick={logout} className='py-1 text-sm hover:text-red-700 font-bold'>Logout</li>
            </ul>
          </div>}
          
          {user.value && <a><RiAccountCircleFill className='text-xl md:text-2xl mx-2' /></a>}
        </a>
        {!user.value && <Link href={'/login'}>
          <button className="flex ml-10 text-white bg-red-500 border-0 mx-2 py-1 px-2 md:px-6 focus:outline-none hover:bg-red-600 rounded-md">Login</button>
        </Link>}
      </div>
      
    </div >
  )
}

export default NavBar;