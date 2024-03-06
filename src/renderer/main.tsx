import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@app/app'

import '@app/styles/theme.css'
import '@app/styles/globals.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
