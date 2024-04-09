// Contact.tsx
import React, { useState, useRef, useEffect, RefObject } from "react";
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

const Placement= () => {
  const [contactDropdown, setContactDropdown] = useState(false);
  const [nestedDropdown, setNestedDropdown] = useState(false);
  const [TeachersDay, setTeachersDay] = useState(false);
  const [Sports, setSports] = useState(false);
  const contactDropdownRef = useRef(null);
  const dropdownRef = useRef<HTMLUListElement>(null) as RefObject<HTMLUListElement>;


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
    <ul className="p-4 relative group" ref={dropdownRef}
      onMouseEnter={() => setContactDropdown(true)}
      onMouseLeave={() => setContactDropdown(false)}>
      <li className="flex items-center">
        <span>Placements</span>
        <div className="ml-1">
          {contactDropdown ? <AiOutlineUp size={15} /> : <AiOutlineDown size={15} />}
        </div>
      </li>
      <li className="absolute left-4 mt-2 p-2 space-y-2 bg-black text-white font-bold transition-opacity duration-500 ease-in-out"
        style={{
          visibility: contactDropdown ? 'visible' : 'hidden',
          opacity: contactDropdown ? 1 : 0,
          transition: 'visibility 0s, opacity 500ms',
        }}>
        <ul className="relative group" ref={dropdownRef}
          onMouseEnter={() => handleNestedDropdown('institute')}
          onMouseLeave={() => setNestedDropdown(false)}>
          <li className="flex items-center" onClick={() => handleNestedDropdown('institute')} style={{ whiteSpace: 'nowrap' }}>
            <span>Vocation training</span>
            <div className="ml-1 cursor-pointer">
              {nestedDropdown ? <AiOutlineLeft size={13} /> : <AiOutlineRight size={13} />}
            </div>
          </li>
          <li className="absolute left-full top-0 mt-0 p-2 space-y-2 bg-black text-white font-bold transition-opacity duration-500 ease-in-out"
            style={{
              visibility: nestedDropdown ? 'visible' : 'hidden',
              opacity: nestedDropdown ? 1 : 0,
              transition: 'visibility 0s, opacity 500ms',
            }}>
            <ul>
              <li className="p-2">
                <StyledLinkCcn href="https://xaviertech.ac.in/index.php/placements/students-info-13/vocation-training-guideline">Vocation training Guideline</StyledLinkCcn>
              </li>
              <li className="p-2">
                <StyledLinkCcn href="https://xaviertech.ac.in/images/DETE_Semester1.pdf">SEM I</StyledLinkCcn>
              </li>
              <li className="p-2">
                <StyledLinkCcn href="https://xaviertech.ac.in/images/DETE_Semester2.pdf">SEM II</StyledLinkCcn>
              </li>
              <li className="p-2">
                <StyledLinkCcn href="https://xaviertech.ac.in/images/DETE_Semester3.pdf">SEM III</StyledLinkCcn>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <li className="">
              <Link href="https://xaviertech.ac.in/index.php/events/events-28"> Training & Placement</Link>
            </li>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Placement;