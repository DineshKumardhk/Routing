import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/wiki">Wikipedia</Link>
        <a href="https://www.google.com/">Google</a>
        <a href="https://en.wikipedia.org/wiki/Inception">Inception</a>

    </nav>
  )
}

export default Navbar;