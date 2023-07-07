"use client"
import React from 'react'
// import Hamburger from "hamburger-react";
import { Divide as Hamburger } from "hamburger-react";

const HamburgerMenu = ({isOpen,setOpen}) => {
  return (
    <div className="sm:hidden">
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  )
}

export default HamburgerMenu