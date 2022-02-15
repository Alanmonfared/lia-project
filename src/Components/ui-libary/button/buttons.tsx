import styled from "styled-components";




export const Button = styled.button`
border-radius: 1rem;
border: none;
font-weight: 900;
letter-spacing: 0.1rem;
animation: fadeInLeft;
animation-duration: 2s;
margin-top: 23px;
padding: 15px 45px;
text-align: center;
text-transform: uppercase;
transition: 0.5s;
background-size: 200% auto;
color: white;
border-radius: 10px;
display: block;
cursor: pointer;
background-image: linear-gradient(to right, #1FA2FF 0%, #12D8FA  51%, #1FA2FF  100%);


&:hover {
  background-position: right center; 
  color: #fff;
  text-decoration: none;
  box-shadow: 0 0 15px gray;

}

`;