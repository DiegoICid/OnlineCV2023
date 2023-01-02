import React from 'react'
import '../../styles.css';
 

const Skillitem = ({description}) => {
  return (
    <li>
    <span className="fa-li"><i className="fas fa-check"></i></span>
               {description}
    </li>
  )
}

export default Skillitem