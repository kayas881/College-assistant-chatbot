import React, { useState, useRef, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown, AiOutlineUp,AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import Contact from "./Navbar/Nav/contact";
import Tools from "./Navbar/Nav/Tools";
import Administ from "./Navbar/Nav/Administ";
import MobileNav from "./Navbar/mobileNav/MobileNav";
import Event from "./Navbar/Nav/Event";
import Placement from "./Navbar/Nav/Placement";
import styled from 'styled-components';
const StyledLink = styled.a`
  text-decoration: none;
  display: block;
  padding: 5px 0;
  
  font-size: 20px;
  line-height: 1;
  font-weight: bold;
  position: relative;
  z-index: 1;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, #23abd4, #23abd4 50%, #fff 50%);
  background-size: 200% 100%;
  background-position: -100%;
  transition: all 0.3s ease-in-out;

  &:before {
    display: block;
    content: '';
    width: 0;
    height: 3px;
    bottom: 5px;
    left: 0;
    bottom: -3px;
    z-index: 0;
    position: absolute;
    background: #23abd4;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-position: 0%;

    &:before {
      width: 100%;
    }
  }
`;
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [toolsDropdown, setToolsDropdown] = useState(false);
  const [contactDropdown, setContactDropdown] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
  setIsMounted(true);
}, []);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const contactDropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) 
      ) {
        setToolsDropdown(false);

      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, contactDropdownRef]);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleToolsDropdown = () => {
    setToolsDropdown(!toolsDropdown);
    if (contactDropdown) {
      setContactDropdown(false);
    }
  };
  return (
    <div className="relative z-20 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Xavier's Chatbot.</h1>
  
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">
          <Link href="https://xaviertech.ac.in/index.php/about">About</Link>
        </li>
        {isMounted && <Contact />}
        {isMounted && <Administ />}
        {isMounted && <Event />}
        {isMounted && <Placement />}
        {isMounted && <Tools />} {/* Use Tools component */}
      </ul>
      
      <MobileNav />
  
    </div>
  );
};

export default Navbar;