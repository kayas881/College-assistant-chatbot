import React, { useState, useRef, useEffect } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import styled from 'styled-components';
import Link from "next/link";

const StyledLinkCcn = styled.a`
  text-decoration: none;
  display: block;
  padding: 5px 0;
  white-space: nowrap;a
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

const StudentInfo = () => {
    const [mobileDropdown, setMobileDropdown] = useState(false);
    const [staffDropdown, setstaffDropdown] = useState(false);
    const [Committees, setCommittees] = useState(false);
    const [BuildingDropdown, setBuildingDropdown] = useState(false);
  
    const dropdownRef = useRef<HTMLLIElement>(null);
  
    const handleMobileDropdown = () => {
      setMobileDropdown(!mobileDropdown);
    };
  
    const handlestaffDropdown = () => {
      setstaffDropdown(!staffDropdown);
    };
  
    const handleCommittees = () => {
      setCommittees(!Committees);
    };
  
    const handleBuildingDropdown = () => {
      setBuildingDropdown(!BuildingDropdown);
    };
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setMobileDropdown(false);
          setstaffDropdown(false);
          setCommittees(false);
          setBuildingDropdown(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    return (
        <li className="border-b border-gray-600 p-4 relative group" ref={dropdownRef}>
       <div className="flex items-center ">
          <span onClick={handleMobileDropdown}>Student Info</span>
          <div className="ml-1">
            <AiOutlineDown size={15} />
          </div>
        </div>
        <ul className=" space-y-2 bg-black text-white font-bold">
        {mobileDropdown && (
          <>
            <li className="p-2" onClick={handlestaffDropdown}>
              <div className="flex items-center">
              Admission Procedure
                <div className="ml-1">
                  {staffDropdown ? <AiOutlineUp size={15} /> : <AiOutlineDown size={15} />}
                </div>
              </div>
              {staffDropdown && (
                  <div className="flex flex-col p-2 items-baseline">
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/students-info/admission-procedure/admission-procedure-2">CAP - 1st Year</StyledLinkCcn>
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/students-info/admission-procedure/admission-procedure-3">CAP - Direct 2nd Year</StyledLinkCcn>
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/students-info/admission-procedure/admission-procedure-4">Regular - 2nd & 3rd Year</StyledLinkCcn>
                  </div>
                )}
              </li>
              <li className="p-2">
            <li className="">
              <Link href="https://drive.google.com/drive/folders/1GfQu80_NKDY1Ezbt7ahC0DH26yWCbMv9"> DETE Syllabus</Link>
            </li>
          </li>
          <li className="p-2">
            <li className="">
              <Link href="https://drive.google.com/drive/folders/1VawVGkUixJsDuh_T6ybGINayNdDIf0W-?usp=drive_link">Modal Answers</Link>
            </li>
          </li>
          <li className="p-2">
            <li className="">
              <Link href="https://xaviertech.ac.in/index.php/students-info/admission-procedure-6">Rule Book For Students</Link>
            </li>
          </li>
          <li className="p-2">
<li>
    <Link href="https://drive.google.com/file/d/1S6LwSp8rK2DuEBJoQZm7mxjc8Y1anBlO/view?usp=sharing">
        Academic Calender 2023-2024
    </Link>
</li>
          </li>
            </>
          )}
        </ul>
      </li>
    );
  };
  
  export default StudentInfo;
