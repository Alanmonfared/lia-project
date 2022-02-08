import React, { useState } from "react";
import styled from "styled-components";

import {
  // Hamburger,
  Ul,
  Image,
  Li,
  Nav,
} from "./Navbar.Styled";
import { Iuser } from "../styled-Components/Icon.Styled";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen((curr) => !curr);
  };

  return (
    <>
      <Nav>
        <Ul>
          {isOpen && (
            <NavbarExtend>
              <NavbarExtendLink>
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  to="/login"
                >
                  <Iuser>Logga in</Iuser>
                  
                </Link>
              </NavbarExtendLink>

              <NavbarExtendLink>
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  to="/"
                  onClick={handleClick}
                >
                  Hem
                </Link>
              </NavbarExtendLink>
              <NavbarExtendLink>
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  to="/Casino"
                  onClick={handleClick}
                >
                  Casino
                </Link>
              </NavbarExtendLink>
              <NavbarExtendLink>
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  to="/Sport"
                  onClick={handleClick}
                >
                  Sport
                </Link>
              </NavbarExtendLink>
              <NavbarExtendLink>
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  to="/Slots"
                  onClick={handleClick}
                >
                  Live
                </Link>
              </NavbarExtendLink>
            </NavbarExtend>
          )}

          <Li>
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
              Hem
            </Link>
          </Li>
          <Li>
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/Casino"
            >
              Casino
            </Link>
          </Li>
          <Li>
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/Sport">
              Jackpots
            </Link>
          </Li>
          <Li>
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/Slots">
            Live
            </Link>
          </Li>
          {/* <Li><Link style={{ textDecoration: 'none', color: '#fff' }} to="/help">Help</Link></Li> */}

          <BurgerButton onClick={handleClick}>
            {" "}
            {isOpen ? <>&#10005;</> : <>&#8801;</>}
          </BurgerButton>
        </Ul>

        <div>
          <Link style={{ textDecoration: "none" }} to="/">
            {" "}
            <Image
              src="https://www.nät-casino.se/wp-content/uploads/2015/12/leovegas-logo-2-320x300.png"
              alt="logo"
            />
          </Link>
        </div>

        <Ul>
          <Li>
            {" "}
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/login">
              <Iuser></Iuser>
            </Link>
          </Li>
        </Ul>
      </Nav>
    </>
  );
}

const BurgerButton = styled.button`
  width: 40px;
  height: 50px;
  border: none;
  background: none;
  font-size: 50px;
  color: white;
  cursor: pointer;

  @media screen and (min-width: 1100px) {
    display: none;
  }
`;

const NavbarExtend = styled.div`
  position: absolute;
  top: 135px;
  left: 0;
  height: calc(100vh - 60px);
  width: 100%;
  animation: fadeInLeft;
  animation-duration: 2s;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: #000000e8;

  @media screen and (min-width: 1100px) {
    display: none;
  }
`;

const NavbarExtendLink = styled.li`
  list-style: none;
  border: none;
  color: white;
  margin-left: 1.3rem;
  margin-top: 2rem;
  animation: fadeInLeft;
  animation-duration: 2s;
  &:hover {
    background-color: black;
    padding-top: 2rem;
    padding-bottom: 2rem;
    -webkit-border-radius: 500px;
    -webkit-border-top-left-radius: 0;
    border-radius: 500px;
    border-top-left-radius: 0;
    display: flex;
    justify-content: center;
    transition: transform 300ms;
    width: 90%;
    height: 10%;
  }
  
`;


