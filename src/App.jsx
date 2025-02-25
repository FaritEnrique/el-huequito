import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import NosotrosPage from './pages/NosotrosPage'
import ProductosPage from './pages/ProductosPage'
import PromocionPage from './pages/PromocionPage'
import PromocionAdminPage from './pages/PromocionAdminPage'
import IdeasPage from './pages/IdeasPage'
import PresupuestarPage from './pages/PresupuestarPage'
import ContactoPage from './pages/ContactoPage'
import PrivacidadPage from './pagesHelp/PrivacidadPage'
import PreguntasFecuentesPage from './pages/PreguntasFrecuentesPage'
import Login from './components/Login'
import AdminPage from './pages/AdminPage'
import EditPreguntasPage from './pages/EditPreguntasPage'
import NewQuestionPage from './pagesHelp/NewQuestionPage'
import EditarPreguntaPage from './pagesHelp/EditarPreguntaPage'
import GestionMensajes from './pages/GestionMensajes'
import RegistroCliente from './pages/RegistroCliente';
import UserList from './pages/UserList';
import VerClienteId from './pages/VerClienteId';
import RegistrarProducto from './pages/RegistrarProducto';
import GestionProductos from './pages/GestionProductos';

const App = () => {
  return (
    <BrowserRouter>
      <Toaster richColors position='top-right' />
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='/nosotros' element={<NosotrosPage />} />
          <Route path='/productos' element={<ProductosPage />} />
          <Route path='/promociones' element={<PromocionPage />} />
          <Route path='/admin/promociones' element={<PromocionAdminPage />} />
          <Route path='/ideas' element={<IdeasPage />} />
          <Route path='/presupuestar' element={<PresupuestarPage />} />
          <Route path='/contacto' element={<ContactoPage />} />
          <Route path='/politica-de-privacidad' element={<PrivacidadPage />} />
          <Route path='/preguntas-frecuentes' element={<PreguntasFecuentesPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/edit-preg' element={<EditPreguntasPage />} />
          <Route path='/new-question' element={<NewQuestionPage />} />
          <Route path='/edit/pregunta/:id' element={<EditarPreguntaPage />} />
          <Route path='/manage/messages' element={<GestionMensajes />} />
          <Route path='/registro/cliente' element={<RegistroCliente />} />
          <Route path='/admin/user-list' element={<UserList />} />
          <Route path='/ver/cliente/:id' element={<VerClienteId />} />
          <Route path='/registro/producto' element={<RegistrarProducto />} />
          <Route path='/gestionProductos' element={<GestionProductos />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App