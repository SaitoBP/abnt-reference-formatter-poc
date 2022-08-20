import { MantineProvider } from '@mantine/core'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { Formatter } from './pages'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Formatter />
    </MantineProvider>
  </StrictMode>,
)
