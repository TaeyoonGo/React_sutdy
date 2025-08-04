import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppProfile from "./basic/AppProfile.jsx";
import AppCounter from "./basic/AppCounter.jsx";
import AppProduct from "./basic/AppProduct.jsx";
import AppXY from "./AppXY.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AppXY/>
  </StrictMode>,

)
