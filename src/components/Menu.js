import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectMenuItem } from '../actions'

// TODO: active button would change color to red
const Menu = props => {
    return (
        <div class="ui inverted top stackable menu huge">
            <Link class="item" to='/'>
                <div>
                    <i class="terminal icon"></i>
                    &nbsp;NMLab&nbsp;網路與多媒體實驗室
                </div>
            </Link>
            <div class="right menu">
                <Link class="item" to='/'>首頁</Link>
                <Link class="item" to='/calendar'>行事曆</Link>
                <Link class="item" to='/rules'>實驗規則</Link>
                <Link class="item" to='/projects'>期末專題</Link>
                <Link class="item" to='/resources'>相關資源</Link>
            </div>
        </div>
    )
}

export default connect(
    null,
    { selectMenuItem }
)(Menu)