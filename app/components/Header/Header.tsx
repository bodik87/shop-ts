"use client";
import React, { useState } from "react";
import Promo from './Promo'
import Navbar from './Navbar'
import Panel from './Panel'
import { useMotionValueEvent, useScroll } from "framer-motion";


const Header = () => {
 const [scrollUp, setScrollUp] = useState(true);
 // const [transparent, setTransparent] = useState(true);

 const { scrollY }: any = useScroll();

 useMotionValueEvent(scrollY, "change", (latest: any) => {
  const previousScrollY = scrollY.getPrevious();
  if (latest > previousScrollY && scrollY.current > 300) {
   setScrollUp(false);
  } else {
   setScrollUp(true);
  }

  // if (scrollY.current < 20) {
  //  setTransparent(true);
  // } else {
  //  setTransparent(false);
  // }
 });

 return (
  <header
   className={`${!scrollUp && "-translate-y-full"} fixed top-0 left-0 w-full transition-all duration-300 flex flex-col z-30`}
  >
   <Promo />
   <Navbar />
   <Panel />
  </header>
 )
}

export default Header