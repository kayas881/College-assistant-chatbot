// Contact.tsx
import React, { useState, useRef, useEffect } from "react";
import { AiOutlineUp, AiOutlineDown, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styled from 'styled-components';
import Link from "next/link";
import Image from 'next/image';
import AcademicCalender from "../../../assets/Academic.jpeg"
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

const Studentinfo = () => {
  const [contactDropdown, setContactDropdown] = useState(false);
  const [nestedDropdown, setNestedDropdown] = useState(false);
  const [Committees, setCommittees] = useState(false);
  const [Building, setBuilding] = useState(false);
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
    setCommittees(false);
    setBuilding(false);
  
    // Open the selected dropdown
    if (dropdown === 'institute') {
      setNestedDropdown(true);
    } else if (dropdown === 'esteemed') {
      setCommittees(true);
    } else if (dropdown === 'certificates') {
      setBuilding(true);
    }
  };
  

  return (
    <li className="p-4 relative group" ref={dropdownRef}
      onMouseEnter={() => setContactDropdown(true)}
      onMouseLeave={() => setContactDropdown(false)}>
      <div className="flex items-center text-nowrap">
        <span>Student Info</span>
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
            <span>Admission Procedure</span>
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
              <StyledLinkCcn href="https://xaviertech.ac.in/index.php/students-info/admission-procedure/admission-procedure-2">CAP - 1st Year</StyledLinkCcn>
            </li>
            <li className="p-2">
              <StyledLinkCcn href="https://xaviertech.ac.in/index.php/students-info/admission-procedure/admission-procedure-3">CAP - Direct 2nd Year</StyledLinkCcn>
            </li>
            <li className="p-2">
              <StyledLinkCcn href="https://xaviertech.ac.in/index.php/students-info/admission-procedure/admission-procedure-4">Regular - 2nd & 3rd Year</StyledLinkCcn>
            </li>
          </ul>
        </li>
        <li className="relative group">
            <li className="">
              <Link href="https://drive.google.com/drive/folders/1GfQu80_NKDY1Ezbt7ahC0DH26yWCbMv9"> DETE Syllabus</Link>
            </li>
          </li>
          <li className="relative group">
            <li className="">
              <Link href="https://drive.google.com/drive/folders/1VawVGkUixJsDuh_T6ybGINayNdDIf0W-?usp=drive_link">Modal Answers</Link>
            </li>
          </li>
          <li className="relative group">
            <li className="">
              <Link href="https://xaviertech.ac.in/index.php/students-info/admission-procedure-6">Rule Book For Students</Link>
            </li>
          </li>
          <li className="relative group">
<li>
    <Link href="https://drive.google.com/file/d/1S6LwSp8rK2DuEBJoQZm7mxjc8Y1anBlO/view?usp=sharing">
        Academic Calender 2023-2024
    </Link>
</li>
          </li>
      </ul>
    </li>
  );
};

export default Studentinfo;