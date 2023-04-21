import React from 'react'
import './App.css'

// React Components

// React Layout Imports

// React Router Imports

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// Import Pages
import Home from './pages/Home/Home'

export default function App (): JSX.Element {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route index element={<Home/>} />
        <Route path="/dashbaord">
          <Route path='' />
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
