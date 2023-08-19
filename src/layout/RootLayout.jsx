import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import BreadCrupms from '../components/BreadCrupms'

function RootLayout() {
   return (
      <>
         <header>
            <nav>
               
               <NavLink to="/">Home</NavLink>
               <NavLink to='/articles'>Articles</NavLink>
               <NavLink to="/about">About</NavLink>
               <NavLink to="/contact">Contact</NavLink>
            </nav>
            <BreadCrupms />
         </header>
         <main><Outlet /></main>
         <footer></footer>
      </>
   )
}

export default RootLayout