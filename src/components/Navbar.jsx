import React from 'react'
import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="" />
            Travelto
          </div>
          <div className="toggle"></div>
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#recommend">Recommond</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <button>Connect</button>
      </Nav>
    </>
  );
}
const Nav = styled.nav`
display:flex;
justify-content:space-between;
align-items:center ;
.brand{
  .container {
    cursor:pointer;
    display: flex;
    justify-content:centre;
    align-items:center;
    gap:0.4rem;
    font-size:1.2rem;
    font-weight:900;
    text-transform:uppercase;
  }
  .toggle{
    display:none;

  }
}
ul{
  display: flex;
  list-style-type: none;
  gap: 1rem;
  li{
    a{
      text-decoration: none;
      color: #0077b6;
      font-size: 1.2rem;
      transition: 0ms .1s ease-in-out;
      
      &:hover{
        color: #023e8a;

      }
    }
    &:first-of-type{
      a{
        color: #023e8a;
        font-weight: 900;
      }
    }
  }
}
button{
  padding: 1% 0.2rem 0.8rem;
  cursor:pointer;
  border-radius: 1rem;
  border: none;
  color:white;
  background-color: #48cae4;
  text-transform: uppercase;
  font-size: 1.1rem;
  letter-spacing:0.1rem;
  transition: 0.3s ease-in-out;
  &:hover{
    background-color: #023e8a;
  }
}
` 
