import React, { Component } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const Icon = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 30px;
  width: 50px;
  margin: 20px;
  cursor: pointer;
  display: none;
  z-index: 2;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    div {
      width: 30px;
      height: 4px;
      border-radius: 10px;
      background-color: #313131;
      transform-origin: 2%;
      transition: all 0.2s ease-in;
      &:nth-child(1) {
        transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
      }
      &:nth-child(2) {
        transform: ${(props) =>
          props.open ? "translateX(-1rem)" : "translateX(0)"};
        opacity: ${(props) => (props.open ? "0" : "1")}
      }
      &:nth-child(3) {
        transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

class Hamburger extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  clickHandler = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    return (
      <>
        <Icon onClick={this.clickHandler} open={this.state.open}>
          <div></div>
          <div></div>
          <div></div>
        </Icon>
        <Navbar open= {this.state.open} />
      </>
    );
  }
}

export default Hamburger;
