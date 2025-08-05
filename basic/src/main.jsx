import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppProfile from "./basic/AppProfile.jsx";
import AppCounter from "./basic/AppCounter.jsx";
import AppProduct from "./basic/AppProduct.jsx";
import AppXY from "./AppXY.jsx";
import AppMentor from "./AppMentor.jsx";
import AppMentors from "./AppMentors.jsx";
import AppMentorsImmer from "./AppMentorsImmer.jsx";
import AppForm from "./AppForm.jsx";
import AppWrap from "./AppWrap.jsx";
import AppCard from "./AppCard.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AppCard/>
  </StrictMode>
)
