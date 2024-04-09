import React, { useState, RefObject, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import styled from 'styled-components';
import Link from "next/link";
import MobileContact from "./MobileContact";
import MobileAdminist from "./MobileAdminist";
import MobileEvent from "./MobileEvent";
import MobilePlacements from "./MobilePlacements";
const StyledLinkCcn = styled.a`
  text-decoration: none;
  display: block;
  padding: 5px 0;
  white-space: nowrap;
  font-size: 15px;
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

const MobileNav = () => {
  const [nav, setNav] = useState(false);
  const [toolsDropdown, setToolsDropdown] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleToolsDropdown = () => {
    setToolsDropdown(!toolsDropdown);
  };

  return (
    <div>
            <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      
      <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
        <h1 className="w-full text-3xl m-4 font-bold text-[#00df9a]">REACT.</h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <MobileContact  />
          <MobileAdminist />
          <MobileEvent />
          <MobilePlacements />
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 relative group" ref={dropdownRef}>
            <div className="flex items-center" onClick={handleToolsDropdown}>
              <span>Tools</span>
              <div className="ml-1">
                {toolsDropdown ? <AiOutlineUp size={15} /> : <AiOutlineDown size={15} />}
              </div>
            </div>
            <ul className="absolute left-4 mt-2 p-2 space-y-2 bg-black text-white font-bold transition-opacity duration-500 ease-in-out"
              style={{
                visibility: toolsDropdown ? 'visible' : 'hidden',
                opacity: toolsDropdown ? 1 : 0,
                transition: 'visibility 0s, opacity 500ms',
              }}>
              <li className="p-2">
                <StyledLink href="/Chatbot">Chatbot</StyledLink>
              </li>
              <li className="p-2">
                <StyledLink href="/Result">Marksheet</StyledLink>
              </li>
              <li className="p-2">
                <StyledLink href="https://bunk-bc.vercel.app/">BunkBc</StyledLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;