import React from 'react';
import styled from 'styled-components';


const NavList = styled.ul`
  display: flex;
  justify-content: right;
  list-style: none;
  background-color: #e5e6e6;
  margin: 0;
  padding: 10px 20px;
  li {
    padding: 10px 20px;
    font-weight: bold;
  }
  li:hover {
    color: #eef1ef;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    transition: all 0.2s ease-in;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
    padding-top: 70px;

    li {
      margin: 15px 10px;
    }
  }
`;

const navbar = ({open}) => {
    return (<NavList open={open} >
        <li>Home</li>
        <li>Products</li>
        <li>About Us</li>
    </NavList>);
};

export default navbar;