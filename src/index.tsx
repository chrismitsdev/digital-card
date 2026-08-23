import './styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

const el = document.getElementById('root') as HTMLDivElement
ReactDOM.createRoot(el).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
