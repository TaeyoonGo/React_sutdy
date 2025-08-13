import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppJSX from "./basic/AppJSX.jsx";
import AppCounter from "./basic/AppCounter.jsx";
import AppProducts from "./basic/AppProducts.jsx";
import AppXY from "./AppXY.jsx";
import AppMentor from "./AppMentor.jsx";
import AppMentors from "./AppMentors.jsx";
import AppMentorsImmer from "./AppMentorsImmer.jsx";
import AppForm from "./AppForm.jsx";
import AppWrap from "./AppWrap.jsx";
import AppCard from "./AppCard.jsx";
import AppTheme from "./AppTheme.jsx";
import AppMentorsButton from "./AppMentorsButton.jsx";
import Products from "./basic/components/Products.jsx";
import Button1 from "./components/Button1.jsx";
import Button2 from "./components/Button2.jsx";
import StyledComponent from "./StyledComponent.jsx";
import TailwindComponent from "./TailwindComponent.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Button1/>
      <Button2/>
      <StyledComponent/>
      <TailwindComponent/>
  </StrictMode>,
)
