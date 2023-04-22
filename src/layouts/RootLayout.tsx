import React from 'react'
import { Outlet } from 'react-router-dom'

import './styles/root_layout.css'

export default function RootLayout (): JSX.Element {
  return (
    <div className='root-layout-container'>
      <Outlet />
    </div>
  )
}
