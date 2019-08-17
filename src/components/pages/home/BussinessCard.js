import React from 'react'

const BussinessCard = props => {
    
    return (
        <div class="card">
            <div class="image" href={props.href}>
                <img src={props.photo}/>
            </div>
            <div class="content">
            <a class="header" href={props.href}>
                {props.name}
            </a>
            <div class="meta">
                <span class="date">Office: {props.office}</span>
            </div>
            </div>
        </div>
        
    )
    
}

export default BussinessCard
