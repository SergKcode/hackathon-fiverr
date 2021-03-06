import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding-right: 5%;
  font-family: 'Josefin Sans',sans-serif;
  font-weight: bold;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fcfcfc;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 54vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    }

  li {
    padding: 18px 10px;
    &:hover {
     color: #fcfcfc;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Favorites</li>
      <li>Messages</li>
      <li>payments and transfers</li>
      <li>Sign In</li>
    </Ul>
  )
}

export default RightNav;