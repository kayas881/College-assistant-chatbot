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

const MobilePlacements = () => {
    const [mobileDropdown, setMobileDropdown] = useState(false);
    const [Training, setTraining] = useState(false);
    const [Vocation, setVocation] = useState(false);
  
    const dropdownRef = useRef<HTMLLIElement>(null);
  
    const handleMobileDropdown = () => {
      setMobileDropdown(!mobileDropdown);
    };
  
  
    const handleTraining = () => {
      setTraining(!Training);
    };
  
    const handleVocation = () => {
      setVocation(!Vocation);
    };
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setMobileDropdown(false);
          setTraining(false);
          setVocation(false);
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
          <span onClick={handleMobileDropdown}>Placements</span>
          <div className="ml-1">
            <AiOutlineDown size={15} />
          </div>
        </div>
        <ul className=" space-y-2 bg-black text-white font-bold">
        {mobileDropdown && (
          <>
         <li className="p-2" >
             <Link href="https://xaviertech.ac.in/index.php/events/events-28">Training & Placement</Link>
              </li>
              <li className="p-2" onClick={handleTraining}>
              <div className="flex items-center">
              Vocation training
                <div className="ml-1">
                  {Training ? <AiOutlineUp size={15} /> : <AiOutlineDown size={15} />}
                </div>
              </div>
              {Training && (
           <div className="flex flex-col p-2 items-baseline">
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/placements/students-info-13/vocation-training-guideline">Vocation training Guideline</StyledLinkCcn>
                    <StyledLinkCcn href="https://xaviertech.ac.in/images/DETE_Semester1.pdf">SEM I</StyledLinkCcn>
                    <StyledLinkCcn href="https://xaviertech.ac.in/images/DETE_Semester2.pdf">SEM II</StyledLinkCcn>
                    <StyledLinkCcn href="https://xaviertech.ac.in/images/DETE_Semester3.pdf">SEM III</StyledLinkCcn>
                  </div>
                )}
              </li>
            </>
          )}
        </ul>
      </li>
    );
  };
  
  export default MobilePlacements;
