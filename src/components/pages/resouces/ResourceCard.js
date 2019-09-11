import React from 'react'
import { Link } from 'react-router-dom'

const ResourceCard = props => {
    return (
        <div class="ui card">
            <Link class="image" to={props.page}>
                <img  src={props.img}/>
            </Link>
            <div class="content">
                <Link class="header" to={props.page}>{props.course}</Link>
                <div class="meta">
                <a>{props.since}</a>
                </div>
            </div>
        </div>
    )
}

export default ResourceCard
