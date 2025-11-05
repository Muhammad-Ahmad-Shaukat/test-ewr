'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50) // Trigger sticky behavior after 50px scroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <>
      <header className={`desktop_header w-[100%] not_scrolled z-[99] max-w-[100%] pt-[23px] bg-[#F6F6F6] transition-all duration-300 ${isScrolled ? 'fixed top-0 z-50 pt-[10px]' : 'relative '}`}>
          <div className={`w-[100%] mx-auto bg-[#fff] rounded-[10px] flex pl-[16px] pr-[6px] py-[6px] items-center shadow-sm transition-all duration-150 overflow-hidden ${isScrolled ? 'max-w-[341px] gap-[20px]' : 'max-w-[638px] gap-[35px]'}`}>
                <div className='Logo flex-shrink-0'>
                    <Image src='/Logo.svg' alt='Logo' width={49} height={45} />
                </div>
                <nav className={`transition-all duration-150 overflow-hidden ${isScrolled ? 'hidden' : 'max-w-full opacity-100 translate-x-0'}`}>
                    <ul className='flex gap-[29px]'>
                      <li className='nav-item'>
                        <Link href="/" className="nav-link w-inline-block">
                          <div className="nav-flip-hover">
                            <div className="nav-link-text nav font-medium text-[14px] leading-normal text-black">Home</div>
                            <div className="nav-link-text hover font-medium text-[14px] leading-normal text-black">Home</div>
                          </div>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href="/services" className="nav-link w-inline-block">
                          <div className="nav-flip-hover">
                            <div className="nav-link-text nav font-medium text-[14px] leading-normal text-black">Services</div>
                            <div className="nav-link-text hover font-medium text-[14px] leading-normal text-black">Services</div>
                          </div>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href="/case-study" className="nav-link w-inline-block">
                          <div className="nav-flip-hover">
                            <div className="nav-link-text nav font-medium text-[14px] leading-normal text-black">Case Study</div>
                            <div className="nav-link-text hover font-medium text-[14px] leading-normal text-black">Case Study</div>
                          </div>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href="/our-team" className="nav-link w-inline-block">
                          <div className="nav-flip-hover">
                            <div className="nav-link-text nav font-medium text-[14px] leading-normal text-black">Our Team</div>
                            <div className="nav-link-text hover font-medium text-[14px] leading-normal text-black">Our Team</div>
                          </div>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href="/careers" className="nav-link w-inline-block">
                          <div className="nav-flip-hover">
                            <div className="nav-link-text nav font-medium text-[14px] leading-normal text-black">Careers</div>
                            <div className="nav-link-text hover font-medium text-[14px] leading-normal text-black">Careers</div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                </nav>
                <div className={`contact_button flex-shrink-0 ml-auto transition-all duration-150 relative ${isScrolled ? 'flex gap-2' : 'block'}`}>
                   <Link href='' className={`font-medium text-[12px] leading-normal text-white bg-[#404040] tracking-[0.2px] px-[12px] py-[16px] rounded-[10px] transition-all duration-150 ${isScrolled ? 'opacity-100 translate-x-0 relative' : 'opacity-0 translate-x-full pointer-events-none absolute'}`}>
                      Book a Call
                    </Link>
                    <Link href='' className={`font-medium text-[12px] leading-normal text-white bg-[#148AFF] tracking-[0.2px] px-[12px] py-[16px] rounded-[10px] transition-all duration-150`}>
                     Schedule Call
                    </Link>
                </div>
         </div>
        </header>
        {/* Spacer to maintain layout when header becomes fixed - desktop only */}
        {isScrolled && <div className="h-[88px] desktop_spacer"></div>}


        <div className='mobile_header'>
          <header className='w-[100%] max-w-[100%] bg-[#F6F6F6] relative z-50'>
            <div className='flex items-center justify-between px-[16px] py-[10px]'>
              <div className='mobile_logo'>
                <Image src='/Logo.svg' alt='Logo' width={49} height={45} />
              </div>
              <button 
                className='hamburger_icon cursor-pointer flex flex-col justify-center items-center w-[30px] h-[30px] relative focus:outline-none'
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <div className={`burger-line first absolute transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : 'rotate-0 -translate-y-[3px]'}`}></div>
                <div className={`burger-line second absolute transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45' : 'rotate-0 translate-y-[3px]'}`}></div>
              </button>
            </div>
            <div className={`mobile_menu absolute top-full left-0 w-full bg-[#F6F6F6] overflow-hidden transition-all duration-300 ease-in-out z-50 ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className='flex flex-col px-[16px] pb-[20px] pt-[10px]'>
                <li><Link href="/" className="block py-2 text-[#000] font-medium text-[22px]" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                <li><Link href="/services" className="block py-2 text-[#000] font-medium text-[22px]" onClick={() => setIsMobileMenuOpen(false)}>Services</Link></li>
                <li><Link href="/case-study" className="block py-2 text-[#000] font-medium text-[22px]" onClick={() => setIsMobileMenuOpen(false)}>Case Study</Link></li>
                <li><Link href="/our-team" className="block py-2 text-[#000] font-medium text-[22px]" onClick={() => setIsMobileMenuOpen(false)}>Our Team</Link></li>
                <li><Link href="/careers" className="block py-2 text-[#000] font-medium text-[22px]" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link></li>
              </ul>
            </div>
          </header>
        </div>
    </>
  )
}