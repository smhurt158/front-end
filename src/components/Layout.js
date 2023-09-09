import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
const Layout = () => {
  return (
    <div>
      <Header />
      <div className="content" style={{paddingTop:"100px"}}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout