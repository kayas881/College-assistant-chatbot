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

const MobileContact = () => {
    const [mobileDropdown, setMobileDropdown] = useState(false);
    const [societyDropdown, setSocietyDropdown] = useState(false);
    const [messageDropdown, setMessageDropdown] = useState(false);
    const [certificateDropdown, setCertificateDropdown] = useState(false);
  
    const dropdownRef = useRef<HTMLLIElement>(null);
  
    const handleMobileDropdown = () => {
      setMobileDropdown(!mobileDropdown);
    };
  
    const handleSocietyDropdown = () => {
      setSocietyDropdown(!societyDropdown);
    };
  
    const handleMessageDropdown = () => {
      setMessageDropdown(!messageDropdown);
    };
  
    const handleCertificateDropdown = () => {
      setCertificateDropdown(!certificateDropdown);
    };
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setMobileDropdown(false);
          setSocietyDropdown(false);
          setMessageDropdown(false);
          setCertificateDropdown(false);
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
          <span onClick={handleMobileDropdown}>Contact</span>
          <div className="ml-1">
            <AiOutlineDown size={15} />
          </div>
        </div>
        <ul className=" space-y-2 bg-black text-white font-bold">
        {mobileDropdown && (
          <>
            <li className="p-2" onClick={handleSocietyDropdown}>
              <div className="flex items-center">
                Society
                <div className="ml-1">
                  {societyDropdown ? <AiOutlineUp size={15} /> : <AiOutlineDown size={15} />}
                </div>
              </div>
              {societyDropdown && (
                  <div className="flex flex-col p-2 items-baseline">
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/institute/institute-3">Our Society</StyledLinkCcn>
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/institute/institute-4">GOVERNING BODY TRUSTEES</StyledLinkCcn>
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/institute/institute-16">Citizen Chapter</StyledLinkCcn>
                  </div>
                )}
              </li>
              <li className="p-2" onClick={handleMessageDropdown}>
              <div className="flex items-center">
                Messages
                <div className="ml-1">
                  {messageDropdown ? <AiOutlineUp size={15} /> : <AiOutlineDown size={15} />}
                </div>
              </div>
              {messageDropdown && (
           <div className="flex flex-col p-2 items-baseline">
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/institute/institute-5/institute-6">Director's Message</StyledLinkCcn>
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/institute/institute-5/institute-7">Principal's Message</StyledLinkCcn>
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/institute/institute-5/institute-8">HOD's Message</StyledLinkCcn>
                  </div>
                )}
              </li>
              <li className="p-2" onClick={handleCertificateDropdown}>
              <div className="flex items-center">
                Certificates
                <div className="ml-1">
                  {certificateDropdown ? <AiOutlineUp size={15} /> : <AiOutlineDown size={15} />}
                </div>
              </div>
              {certificateDropdown && (
                 <div className="flex flex-col p-2 items-baseline">
                    <StyledLinkCcn href="https://xaviertech.ac.in/index.php/institute/institute-9/institute-10">MSBTE Equivalence Certificate</StyledLinkCcn>
                    <StyledLinkCcn href="https://xaviertech.ac.in/images/2019/Institute/Autonomy-MinorityCertificate.pdf">Autonomy Certificate</StyledLinkCcn>
                    <StyledLinkCcn href="https://xaviertech.ac.in/images/2019/Institute/Minority_Status_Certificate_Replace.pdf">Minority Certificate</StyledLinkCcn>
                  </div>
                )}
              </li>
            </>
          )}
        </ul>
      </li>
    );
  };
  
  export default MobileContact;
