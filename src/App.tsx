// import { useState } from 'react'
// import { add, format } from 'date-fns'
// import { Typography } from '@material-tailwind/react';
import Hero from './components/Hero';
import StickyNavbar from './components/StickyNavBar';

import './assets/css/Global.css'

function App() {

  return (
    <>
      <StickyNavbar/>
      <div className='grid-container'>
        <Hero title="The Brunette Baker" copy="Crafting artisanal sourdough bread with love: elevating every loaf with time, care, and a dash of passion"/>
      </div>
    </>
  )
}

export default App
