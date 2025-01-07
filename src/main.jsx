import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App(Lazy loading, Suspense API).jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
