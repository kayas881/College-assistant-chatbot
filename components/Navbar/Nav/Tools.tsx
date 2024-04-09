// Tools.tsx
import React, { useState, useRef, useEffect } from "react";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import styled from 'styled-components';

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
const Tools = () => {
    const [toolsDropdown, setToolsDropdown] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);
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
    }, [dropdownRef]);
  
    return (
      <li className="p-4 relative group" ref={dropdownRef}
          onMouseEnter={() => setToolsDropdown(true)}
          onMouseLeave={() => setToolsDropdown(false)}>
        <div className="flex items-center">
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
    );
  };
  
  export default Tools;