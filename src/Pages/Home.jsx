import React from 'react'
import { NavLink, Outlet } from 'react-router'

const Home = () => {
  return (
    <div className='bg-neutral-300 flex h-60 w-80 justify-center items-center flex-col'>
      This is Home
      <NavLink className="text-blue-500 text-md font-bold" to="app"> App </NavLink>
      <Outlet/>
    </div>
  )
}

export default Home
