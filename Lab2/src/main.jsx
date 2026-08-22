import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterApp from './CounterApp.jsx' 
import CounterAppIA from './CounterAppIA.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp></CounterApp>
    <CounterAppIA></CounterAppIA>
  </StrictMode>,
)
