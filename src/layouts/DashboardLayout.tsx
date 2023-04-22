import React from 'react'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout (): JSX.Element {
  return (
    <div className='home-layout-container'>
      <p>Dashboard view</p>
      <Outlet />
    </div>
  )
}
