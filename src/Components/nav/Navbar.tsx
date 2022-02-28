import React, { useState } from "react";
import styled from "styled-components";

import { Ul, Image, Li, Nav } from "./Navbar.Styled";
import User from "../../Components/ui-libary/icon/icon-login";
import { Link, NavLink } from "react-router-dom";

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
                  Jackpots
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
              <NavbarExtendLink>
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  to="/Leojackpot"
                  onClick={handleClick}
                >
                  Leojackpot
                </Link>
              </NavbarExtendLink>
              <NavbarExtendLink>
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  to="/favorite"
                  onClick={handleClick}
                >
                  Favorite
                </Link>
              </NavbarExtendLink>
            </NavbarExtend>
          )}
        
          <Divi>
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
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/jackpots"
              >
                Jackpots
              </Link>
            </Li>
            <Li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/live"
              >
                Live
              </Link>
            </Li>
            <Li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/leojackpot"
              >
                Leojackpot
              </Link>
            </Li>
            <Li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/favorite"
              >
                Favorite
              </Link>
            </Li>

            <Li>
              {" "}
              <Link style={{ textDecoration: "none" }} to="/login">
              
                <User />
              </Link>
            </Li>
          </Divi>
          <div>
            <Link style={{ textDecoration: "none" }} to="/">
              {" "}
              <Image
                src="https://www.nät-casino.se/wp-content/uploads/2015/12/leovegas-logo-2-320x300.png"
                alt="logo"
              />
            </Link>
          </div>
        </Ul>
       
        <BurgerButton onClick={handleClick}>
          {" "}
          {isOpen ? <>&#10005;</> : <>&#8801;</>}
        </BurgerButton>

      
      </Nav>
    </>
  );
}




const Divi = styled.div`
  display: flex;
  
`;

const BurgerButton = styled.button`
  width: 200px;
  
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
  top: 194px;
  left: 0;
  height: calc(100vh - 60px);
  width: 100%;
  animation: fadeInLeft;
  animation-duration: 2s;
  display: flex;
  flex-direction: column;
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
