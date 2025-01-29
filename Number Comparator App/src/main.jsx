import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import Layout from './components/Layout.jsx'
import { About } from './Pages/About.jsx'
import { Contact } from './Pages/Contact.jsx'
import { ThemeProvider } from './components/contexts/index.js'
import Setting from './Pages/Setting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Layout/>}>
      <Route path='/' element={<App/>} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/setting' element={<Setting/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
