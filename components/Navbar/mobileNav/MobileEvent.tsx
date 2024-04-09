import React, { useState, useRef, useEffect } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
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

const MobileEvent = () => {
    const [mobileDropdown, setMobileDropdown] = useState(false);
    const [AnnualDayDropDown, setAnnualDayDropDown] = useState(false);
    const [TeachersDay, setTeachersDay] = useState(false);
    const [Sports, setSports] = useState(false);
  
    const dropdownRef = useRef<HTMLLIElement>(null);
  
    const handleMobileDropdown = () => {
      setMobileDropdown(!mobileDropdown);
    };
  
    const handleAnnualDayDropDown = () => {
      setAnnualDayDropDown(!AnnualDayDropDown);
    };
  
    const handleTeachersDay = () => {
      setTeachersDay(!TeachersDay);
    };
  
    const handleSports = () => {
      setSports(!Sports);
    };
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setMobileDropdown(false);
          setAnnualDayDropDown(false);
          setTeachersDay(false);
          setSports(false);
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
          <span onClick={handleMobileDropdown}>Events</span>
          <div className="ml-1">
            <AiOutlineDown size={15} />
          </div>
        </div>
        <ul className=" space-y-2 bg-black text-white font-bold">
        {mobileDropdown && (
          <>
            <li className="p-2" onClick={handleAnnualDayDropDown}>
              <div className="flex items-center">
              Annual Day - Manthan
                <div className="ml-1">
                  {AnnualDayDropDown ? <AiOutlineUp size={15} /> : <AiOutlineDown size={15} />}
                </div>
              </div>
              {AnnualDayDropDown && (
                  <div className="flex flex-col p-2 items-baseline">
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/events/events-7/events-8">Annual Day 2020</StyledLinkCcn>
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/events/events-7/events-9">Annual Day 2018</StyledLinkCcn>
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/events/events-7/events-10">Annual Day 2017</StyledLinkCcn>
                  </div>
                )}
              </li>
              <li className="p-2" onClick={handleTeachersDay}>
              <div className="flex items-center">
              Teachers Day
                <div className="ml-1">
                  {TeachersDay ? <AiOutlineUp size={15} /> : <AiOutlineDown size={15} />}
                </div>
              </div>
              {TeachersDay && (
           <div className="flex flex-col p-2 items-baseline">
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/events/events-11/events-12">Teachers Day 2018</StyledLinkCcn>
                    
                  </div>
                )}
              </li>
              <li className="p-2" onClick={handleSports}>
             <Link href="https://xaviertech.ac.in/index.php/events/events-28"> Sports</Link>
              </li>
            </>
          )}
        </ul>
      </li>
    );
  };
  
  export default MobileEvent;
