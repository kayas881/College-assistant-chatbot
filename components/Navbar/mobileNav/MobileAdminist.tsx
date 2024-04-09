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

const MobileAdminist = () => {
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
          <span onClick={handleMobileDropdown}>Administration</span>
          <div className="ml-1">
            <AiOutlineDown size={15} />
          </div>
        </div>
        <ul className=" space-y-2 bg-black text-white font-bold">
        {mobileDropdown && (
          <>
            <li className="p-2" onClick={handlestaffDropdown}>
              <div className="flex items-center">
              Our Staff
                <div className="ml-1">
                  {staffDropdown ? <AiOutlineUp size={15} /> : <AiOutlineDown size={15} />}
                </div>
              </div>
              {staffDropdown && (
                  <div className="flex flex-col p-2 items-baseline">
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/administration/administration-2/administration-3">Admin Staff</StyledLinkCcn>
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/administration/administration-2/administration-4">Teaching Staff</StyledLinkCcn>
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/administration/administration-2/administration-5">Exam Staff</StyledLinkCcn>
                  </div>
                )}
              </li>
              <li className="p-2" onClick={handleCommittees}>
              <div className="flex items-center">
              Committees
                <div className="ml-1">
                  {Committees ? <AiOutlineUp size={15} /> : <AiOutlineDown size={15} />}
                </div>
              </div>
              {Committees && (
           <div className="flex flex-col p-2 items-baseline">
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/administration/administration-10/administration-12">All Committees as per AICTE</StyledLinkCcn>
                    
                  </div>
                )}
              </li>
              <li className="p-2" onClick={handleBuildingDropdown}>
              <div className="flex items-center">
              Building
                <div className="ml-1">
                  {BuildingDropdown ? <AiOutlineUp size={15} /> : <AiOutlineDown size={15} />}
                </div>
              </div>
              {BuildingDropdown && (
                 <div className="flex flex-col p-2 items-baseline">
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/administration/administration-11/administration-12">BEE LAB Cost</StyledLinkCcn>
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/administration/administration-11/computer-lab-cost">Computer LAB Cost</StyledLinkCcn>
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/administration/administration-11/administration-13">Occupancy Certificate</StyledLinkCcn>
                  </div>
                )}
              </li>
            </>
          )}
        </ul>
      </li>
    );
  };
  
  export default MobileAdminist;
