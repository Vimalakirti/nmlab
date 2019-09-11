import React from 'react'

const EachDay = props => {
    return (
        <div class="item">
            <div class="ui tiny image">
                <i class={props.icon}></i>
            </div>
            <div class="content">
                <div class="header">{props.header}</div>
                <div class="meta">
                    <span>{props.time}</span>
                    <span>{props.location}</span>
                </div>
                <div class="description">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default EachDay