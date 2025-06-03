import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/fluent-light/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.min.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
