import React from 'react'

const ResourceCardSimple = props => {
    return (
        <div class={props.colorcard+" card"}>
        <div class="content">
          <h3 class="header">{props.content}</h3>
          <div class="description">
            {props.description}
          </div>
        </div>
        <a class="ui bottom attached button" href={props.page} target="_blank" rel="noopener noreferrer">
          <i class="globe icon"></i>
            link
        </a>
      </div>
    )
}

export default ResourceCardSimple