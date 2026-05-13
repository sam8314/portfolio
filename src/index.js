import { createRoot } from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import { LanguageProvider } from './contexts/language'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <ThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
)
