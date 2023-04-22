import React from 'react'
import './App.css'

// React Components

// React Layout Imports

// React Router Imports

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Home from './pages/Home/Home'

// Import Layouts
import RootLayout from './layouts/RootLayout'
import HomeLayout from './layouts/HomeLayouts'
import DashboardLayout from './layouts/DashboardLayout'

export default function App (): JSX.Element {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='' element={<RootLayout />}>
        <Route element={<HomeLayout />}>
          <Route index element={<Home />}/>
        </Route>
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index path=''/>
        </Route>
      </Route>
    )
  )

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}
