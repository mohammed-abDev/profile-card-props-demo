import React from 'react'
import "../App.css"

function Card(props) {
  return (
    < >
          <div className="profile-card">
            <img src={props.img} alt="Hile" className="avatar" />
            <div className="info">
              <h2>{props.name}</h2>
              <p className="age">{props.age}</p>
              <p className="role">{props.role}</p>
            </div>
          </div>
    </>
      
  );
}

export default Card



