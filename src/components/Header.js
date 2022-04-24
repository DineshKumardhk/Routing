import React from 'react'

const Header = ({ title }) => {
  return (
    <div className="navbar navbar-dark bg-dark text-white">
    <h3>{title}</h3>

    <a id="random-btn" className="navbar btn btn-outline-light" target="blank" href="https://en.wikipedia.org/wiki/Special:Random">Random</a>
  </div>
  )
}

export default Header

