import React from 'react'
import Profile from '../../assets/new.jpg'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="profile_image" id="profile__img">
        <img className='main_img' src={Profile} alt="" />
      </div>
      <strong><span id='twitter' className='profile__text'>TONIE_NG</span></strong>
      <span id='slack' className='profile__text'>tonie</span>
    </div>
  )
}

export default Header