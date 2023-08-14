import React from 'react'
import logo from'./assets/1.jpg'
import './header.css'

export default function Header() {
  return (
    <div>
      <header>
    <div className="left">
      <img src= {logo} alt="Logo"/>
    </div>
    <div className="center">
      <input type="text" placeholder="Search..."/>
    </div>
    <div className="right">
      <select>
        <option value="USD">USD</option>
        <option value="option2">Option 2</option>
      </select>
      <select>
        <option value="EN">EN</option>
        <option value="option4">Option 4</option>
      </select>
    </div>
  </header>
    </div>
  )
}

