import React, { useState } from 'react'
import FlowChart from './components/FlowChart'
import Header from './sections/Header'
import Hero from './sections/Hero'
import MobileMenu from './components/MobileMenu'

const App = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className={`${showMobileMenu ? "h-screen overflow-clip" : "h-fit"}`}>
      <div draggable={false} className='fixed inset-0 bg-[url(/background.jpg)] bg-cover opacity-50 -z-10' />
      <MobileMenu showMobileMenu={showMobileMenu} setShowMobileMenu={ setShowMobileMenu } />
      <Header setShowMobileMenu={setShowMobileMenu } />
      <Hero />
    </div>
  )
}

export default App