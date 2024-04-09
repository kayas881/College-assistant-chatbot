// Contact.tsx
import React, { useState, useRef, useEffect } from "react";
import { AiOutlineUp, AiOutlineDown, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styled from 'styled-components';
import Link from "next/link";

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

const Event= () => {
  const [contactDropdown, setContactDropdown] = useState(false);
  const [nestedDropdown, setNestedDropdown] = useState(false);
  const [TeachersDay, setTeachersDay] = useState(false);
  const [Sports, setSports] = useState(false);
  const contactDropdownRef = useRef(null);
  const dropdownRef = useRef<HTMLLIElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) 
      ) {
        setContactDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleContactDropdown = () => {
    setContactDropdown(!contactDropdown);
  };

  const handleNestedDropdown = (dropdown: string) => {
    // Close all dropdowns
    setNestedDropdown(false);
    setTeachersDay(false);
    setSports(false);
  
    // Open the selected dropdown
    if (dropdown === 'institute') {
      setNestedDropdown(true);
    } else if (dropdown === 'esteemed') {
      setTeachersDay(true);
    } else if (dropdown === 'certificates') {
      setSports(true);
    }
  };
  

  return (
    <li className="p-4 relative group" ref={dropdownRef}
      onMouseEnter={() => setContactDropdown(true)}
      onMouseLeave={() => setContactDropdown(false)}>
      <div className="flex items-center">
        <span>Events</span>
        <div className="ml-1">
          {contactDropdown ? <AiOutlineUp size={15} /> : <AiOutlineDown size={15} />}
        </div>
      </div>
      <ul className="absolute left-4 mt-2 p-2 space-y-2 bg-black text-white font-bold transition-opacity duration-500 ease-in-out"
        style={{
          visibility: contactDropdown ? 'visible' : 'hidden',
          opacity: contactDropdown ? 1 : 0,
          transition: 'visibility 0s, opacity 500ms',
        }}>
        <li className="relative group" ref={dropdownRef}
          onMouseEnter={() => handleNestedDropdown('institute')}
          onMouseLeave={() => setNestedDropdown(false)}>
          <div className="flex items-center" onClick={() => handleNestedDropdown('institute')} style={{ whiteSpace: 'nowrap' }}>
            <span>Annual Day - Manthan</span>
            <div className="ml-1 cursor-pointer">
              {nestedDropdown ? <AiOutlineLeft size={13} /> : <AiOutlineRight size={13} />}
            </div>
          </div>
          <ul className="absolute left-full top-0 mt-0 p-2 space-y-2 bg-black text-white font-bold transition-opacity duration-500 ease-in-out"
            style={{
              visibility: nestedDropdown ? 'visible' : 'hidden',
              opacity: nestedDropdown ? 1 : 0,
              transition: 'visibility 0s, opacity 500ms',
            }}>
            <li className="p-2">
              <StyledLinkCcn href="https://xaviertech.ac.in/index.php/events/events-7/events-8">Annual Day 2020</StyledLinkCcn>
            </li>
            <li className="p-2">
              <StyledLinkCcn href="https://xaviertech.ac.in/index.php/events/events-7/events-9">Annual Day 2018</StyledLinkCcn>
            </li>
            <li className="p-2">
              <StyledLinkCcn href="https://xaviertech.ac.in/index.php/events/events-7/events-10">Annual Day 2017</StyledLinkCcn>
            </li>
          </ul>
        </li>
        <li className="relative group" ref={dropdownRef}
          onMouseEnter={() => handleNestedDropdown('esteemed')}
          onMouseLeave={() => setTeachersDay(false)}>
          <div className="flex items-center" onClick={() => handleNestedDropdown('esteemed')} style={{ whiteSpace: 'nowrap' }}>
            <span>Teachers Day</span>
            <div className="ml-1 cursor-pointer">
              {TeachersDay ? <AiOutlineLeft size={13} /> : <AiOutlineRight size={13} />}
            </div>
          </div>
          <ul className="absolute left-full top-0 mt-0 p-2 space-y-2 bg-black text-white font-bold transition-opacity duration-500 ease-in-out"
            style={{
              visibility: TeachersDay ? 'visible' : 'hidden',
              opacity: TeachersDay ? 1 : 0,
              transition: 'visibility 0s, opacity 500ms',
            }}>
            <li className="p-2">
              <StyledLinkCcn href="https://xaviertech.ac.in/index.php/events/events-11/events-12">Teachers Day 2018</StyledLinkCcn>
            </li>       
          </ul>
        </li>
        <li className="relative group" ref={dropdownRef}>
          <li className="">
            <Link href="https://xaviertech.ac.in/index.php/events/events-28"> Sports</Link>
          </li>
        </li>
      </ul>
    </li>
  );
};

export default Event;