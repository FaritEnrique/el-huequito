import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import NosotrosPage from './pages/NosotrosPage'
import ProductosPage from './pages/ProductosPage'
import PromocionesPage from './pages/PromocionesPage'
import IdeasPage from './pages/IdeasPage'
import PresupuestarPage from './pages/PresupuestarPage'
import ContactoPage from './pages/ContactoPage'
import PrivacidadPage from './pagesHelp/PrivacidadPage'

const App = () => {
  return (
    <BrowserRouter>
      <Toaster richColors position='top-right' />

      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<HomePage />} />
          <Route path='/nosotros' element={<NosotrosPage />} />
          <Route path='/productos' element={<ProductosPage />} />
          <Route path='/promociones' element={<PromocionesPage />} />
          <Route path='/ideas' element={<IdeasPage />} />
          <Route path='/presupuestar' element={<PresupuestarPage />} />
          <Route path='/contacto' element={<ContactoPage />} />
          <Route path='/politica-de-privacidad' element={<PrivacidadPage />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App