import React from 'react'

const  ProjectItem = props => {
    return (
        <tr>
            <td>{props.team}</td>
            <td>{props.names}</td>
            <td>{props.theme}</td>
            <td>{props.topic}</td>
            <td>{props.video}</td>
            <td>{props.code}</td>
            <td>{props.poster}</td>
        </tr>
    )
}

export default ProjectItem