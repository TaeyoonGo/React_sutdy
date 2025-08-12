import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppJSX from "./basic/AppJSX.jsx";
import AppCounter from "./basic/AppCounter.jsx";
import AppProducts from "./basic/AppProducts.jsx";
import AppXY from "./AppXY.jsx";
import AppMentor from "./AppMentor.jsx";
import AppMentors from "./AppMentors.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AppMentors/>
  </StrictMode>,
)
