import React from 'react'
import { Outlet } from 'react-router-dom'

function ArticlesLayout() {
   return (
      <div>
         <h2>Articles</h2>
         <hr />
         <Outlet />
      </div>
   )
}

export default ArticlesLayout