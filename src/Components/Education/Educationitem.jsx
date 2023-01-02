import React from 'react'
import "../../styles.css";

const Educationitem = ({title, subtitle, description}) => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between">
        <div className="flex-grow-1">
            <h3 className="mb-0">{title}</h3>
            <div className="subheading mb-3">{subtitle}</div>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Educationitem