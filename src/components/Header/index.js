import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="https://github.com/DouglasLiebl" aria-label="Home">
        <FaHome size={24} />
      </a>
      <a href="https://github.com/DouglasLiebl" aria-label="User">
        <FaUserAlt size={24} />
      </a>
      <a href="https://github.com/DouglasLiebl" aria-label="SignIn">
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
}
