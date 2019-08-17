import React from 'react'

const ResourceCard = props => {
    return (
        <div class="ui card">
            <a class="image" href={props.page}>
                <img  src={props.img}/>
            </a>
            <div class="content">
                <a class="header" href="#">{props.course}</a>
                <div class="meta">
                <a>{props.since}</a>
                </div>
            </div>
        </div>
    )
}

export default ResourceCard
