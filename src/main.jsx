import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { router } from './components/routing/Routing.jsx';
import AppContextProvider from './components/context/AppContextProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AppContextProvider>
    
  </StrictMode>,
)
