import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Primer from './SinIA/Primer';
import Segundo from './SinIA/Segundo';
import Tercero from './SinIA/Tercero';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Primer></Primer>
    <Segundo></Segundo>
    <Tercero></Tercero>
  </StrictMode>,
)
