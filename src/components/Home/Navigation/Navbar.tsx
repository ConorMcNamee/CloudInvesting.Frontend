import React from 'react'

import { Link } from 'react-router-dom'

export default function Navbar (): JSX.Element {
  return (
    <nav>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/dashboard'>Dashboard</Link>
        </ul>
    </nav>
  )
}
