import React from 'react'

const Semester = props => {
    return (
        <div class="ui container">
            <div class="ui header">
                <h2>{props.semester}</h2>
            </div>
            <table class="ui selectable celled table">
                <thead>
                    <tr>
                        <th>組別</th>
                        <th>組員們</th>
                        <th>主題</th>
                        <th>題目</th>
                        <th>影片連結</th>
                        <th>程式碼連結</th>
                        <th>海報連結</th>
                    </tr>
                </thead>
                {props.tbody}
            </table>
            <br/>
        </div>
    )
}

export default Semester