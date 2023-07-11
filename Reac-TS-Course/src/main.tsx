import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

/* Font awesome free */
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
/* Bootstrap */
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
)
