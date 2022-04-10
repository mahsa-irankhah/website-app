import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
 

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

  a {
    text-decoration: none;
    color: gray;
  }
  
  li a:hover {
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
    return (
      <NavList open={open}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/register">Sign Up</Link>
        </li>
      </NavList>
    );
};

export default navbar;