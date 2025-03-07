import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import LandingPage from './pages/Landingpage/LandingPage.jsx'
import Blog from './pages/Blog/Blog.jsx'
import BlogView from './pages/Blog/BlogView.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='/blog/:title/:id' element={<BlogView />}></Route>
      </Routes>
    </>
  )
}

export default App
