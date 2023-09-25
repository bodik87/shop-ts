"use client";
import React, { useEffect, useState } from "react";
import Promo from './Promo'
import Navbar from './Navbar/Navbar'
import Panel from './Panel'

const Header = () => {
 const [prevScrollPos, setPrevScrollPos] = useState(0);
 const [visible, setVisible] = useState(true)

 const handleScroll = () => {
  const currentScrollPos = window.scrollY

  if (currentScrollPos > prevScrollPos) {
   setVisible(false)
  } else {
   setVisible(true)
  }
  setPrevScrollPos(currentScrollPos)
 }

 useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll)
 })

 return (
  <header
   className={`${!visible && "-translate-y-[110%]"} fixed top-0 left-0 w-full transition-all duration-300 flex flex-col z-30`}
  >
   <Promo />
   <Navbar />
   <Panel />
  </header>
 )
}

export default Header