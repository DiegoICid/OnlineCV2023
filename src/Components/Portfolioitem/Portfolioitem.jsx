import React from 'react'
import '../../styles.css';


const Portfolioitem = ({webCode, webSite, description}) => {
  return (
    <li>
        <a href={webCode} target="_blank" rel="noopener noreferrer"><span className="fa-li"><i className="fas fa-code"></i></span> </a> 
        <a href={webSite} target="_blank" rel="noopener noreferrer"><span><i className="fas fa-globe"></i></span></a>  {description} 
    </li>
  )
}

export default Portfolioitem