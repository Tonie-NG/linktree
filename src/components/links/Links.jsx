import React from 'react'
import './link.css'
import slack from "../../assets/slack.svg"
import git from "../../assets/github.svg"
import data from '../../../data'

const Links = () => {
  // console.log(data)
  return (
    <div className='link'>{data.map((item, key) => (
      <a href={item.link} target='_blank' className='tags' key={key} id={item.id}>{item.title}</a>
    ))}
    <div className="social">
      <img src={slack} alt="" />
      <a href=""><img src={git} alt="" /></a>
    </div>

    </div>
  )
}

export default Links