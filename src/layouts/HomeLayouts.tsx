import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Home/Navigation/Navbar'

export default function HomeLayout (): JSX.Element {
  return (
    <div className='home-layout-container'>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </div>
  )
}
