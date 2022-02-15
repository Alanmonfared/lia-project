import React from "react";
import styled from "styled-components";
import SocialIcons from "../ui-libary/socialicons/SocialIcons";
import { Ul, Image, Li } from "../nav/Navbar.Styled";
// import { Iuser } from "../icon/Icon.Styled";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Container>
        <Flex>
          <MainUl>
            <UlFooter>
              <li>Hjälp</li>
              <li>Kontakta oss</li>
              <li>Hitta oss</li>
            </UlFooter>
          </MainUl>
          <div>
            <Link style={{ textDecoration: "none" }} to="/">
              {" "}
              <Image
                src="https://www.nät-casino.se/wp-content/uploads/2015/12/leovegas-logo-2-320x300.png"
                alt="logo"
              />
            </Link>
          </div>
        </Flex>
        <Mazmoze>
          <div>Copyright &copy; {new Date().getFullYear()} LeoVegas </div>
          <SocialIcons />
        </Mazmoze>

      </Container>
    </>
  );
}

const Container = styled.footer`
  padding: 20px 30px 60px;
  margin-top: 2rem;
  /* background-color: ${({ theme }) => theme.colors.footer}; */
  background-image: linear-gradient(to right, #252525 0%, black 20%);
  color: white;
`;

const Mazmoze = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainUl = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UlFooter = styled.ul`
  display: column;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;
