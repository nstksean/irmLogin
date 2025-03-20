import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.scss'
import './style/App.scss'
import './style/Dashboard.scss'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
