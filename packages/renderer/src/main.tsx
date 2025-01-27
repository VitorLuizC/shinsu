// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOMCustom from './ReactDOMCustom'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')

if (!root)
  throw new Error('Can\'t render without the root element (<div id="root">).')

const canvas = document.createElement('canvas')

canvas.id = 'renderer'

canvas.width = 640
canvas.height = 480

root.appendChild(canvas)

ReactDOMCustom.render(<App />, canvas)

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
