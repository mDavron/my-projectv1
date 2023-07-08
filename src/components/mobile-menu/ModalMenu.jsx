import Link from 'next/link'
import React from 'react'
import HamburgerMenu from '../hamburger/HamburgerMenu'

const ModalMenu = ({isOpen,setOpen}) => {
  return (
    <div className={`${isOpen ? "menu_open" :"menu-hidden"} flex fixed z-50 bg-slate-600/30 top-0 h-screen w-full justify-end left-0 translate-x-full`}>
      <div className=' w-[80%] bg-white h-screen relative'>
          <div className='flex flex-col gap-5 items-start py-20 px-10 text-gray-900 '>
          <Link onClick={()=> setOpen(false)} href={'/'}>Home</Link>
          <Link onClick={()=> setOpen(false)} href={'/about'}>About</Link>
          <Link onClick={()=> setOpen(false)} href={'/contact'}>Contact</Link>
          <Link onClick={()=> setOpen(false)} href={'/resume'}>Resume</Link>
          </div>
          <div className='uppercase text-black absolute top-0 h-[80px] w-full flex items-center justify-start'>
            <div className='ml-4'>
              <HamburgerMenu isOpen={isOpen} setOpen={setOpen}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ModalMenu