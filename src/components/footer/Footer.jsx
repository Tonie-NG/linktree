import React from 'react'
import Zuri from '../../assets/zuri.svg'
import I4G from '../../assets/I4G.svg'
import './footer.css'


const Footer = () => {
  return (
    <div className='footer'>
      <img src={Zuri} alt="" />
      <span>HNG Internship 9 Frontend Task</span>
      <img src={I4G} alt="" />
    </div>
  )
}

export default Footer