import React from 'react'
import image from './images/oculos-vr.png'

function Header(props) {
  const { title } = props

  return (
    <div className='header'>
      <div className='header-title'>{title}</div>
      <img className='header-img' src={image} alt=''></img>
    </div>
  )
}

export default Header
