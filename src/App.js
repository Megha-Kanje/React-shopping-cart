import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home_page from './Home_page/Container/Home_page'
import Cart_Wrapp from './Cart/container/Cart_Wrapp'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home_page} />
          <Route path="/Cart" Component={Cart_Wrapp} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
