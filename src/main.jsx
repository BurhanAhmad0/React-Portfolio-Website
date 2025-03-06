import React from 'react'
import { Client } from 'appwrite';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import App from './App.jsx'

import ScrollToTop from './components/ScrollTop.jsx'

const client = new Client();
client.setProject('67c6bd2300386b359d55');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <ScrollToTop />
    </BrowserRouter>
  </StrictMode>,
)
