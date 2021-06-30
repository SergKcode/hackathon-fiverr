import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';


const Nav = styled.nav`
  height: 38px;
  border-bottom: 2px solid #ffffff;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  
`;
const LogoContanier = styled.div ` 
  width: 90px;
  display: grid;
  place-items: center;
  
`;

const StyledImage = styled.img ` 
  width: 100%;
  height: auto;
  

`;

const Navbar = () => {
  return (
    <Nav>
        <Burger />
    </Nav>
  )
};

export default Navbar;