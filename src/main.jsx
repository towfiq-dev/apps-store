import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { router } from './components/routing/Routing.jsx';
import AppsContextProvider from './components/contexts/AppsContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppsContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AppsContextProvider>
  </StrictMode>,
)
