import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: end;

  list-style: none;
  color: #fff;

  @media (max-width: 1100px) {
    width: 100%;
    margin: 0 0 0 0;
    flex-direction: column;
  }
`;

export const Nav = styled.nav`
  background-image: linear-gradient(to right, #252525 0%, black 100%);
  position: sticky;
  box-shadow: 0 0 3px black;
  height: auto;
  width: 100%;
  z-index: 10;
  top: 0;
  font-size: 1.6rem;
  @media (max-width: 1100px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const Li = styled.li`
  margin-left: 1.3rem;

  &:hover {
    border-bottom: 2px solid #c1b0ad;
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const Image = styled.img`
  max-width: 200px;
  max-height: 200px;

  @media screen and (max-width: 1100px) {
    /* width: 900%; */
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    max-width: 200px;
    max-height: 200px;
  }

  @media (max-width: 865px) {
    max-width: 200px;
    max-height: 200px;
  }
`;

export const bgNavbar = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 60vh;
  background-color: ${({ theme }) => theme.colors.navbar};
  object-fit: cover;
`;
