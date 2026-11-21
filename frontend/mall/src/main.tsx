import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router/root'

createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)