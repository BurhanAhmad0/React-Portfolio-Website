import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import LandingPage from './pages/user/LandingPage'
import Blog from './pages/user/Blog'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  )
}

export default App
