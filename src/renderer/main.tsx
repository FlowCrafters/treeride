import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@app/App'
import '@app/styles/globals.css'
import '@app/styles/window.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
