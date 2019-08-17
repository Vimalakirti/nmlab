import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import Menu from './Menu'
import Footer from './Footer'
import Home from './pages/Home'
import Rules from './pages/Rules'
import Calendar from './pages/Calendar'
import Projects from './pages/Projects'
import Resources from './pages/Resources'
import Admin from './pages/Admin'

class App extends Component {
    render() {
        return (
            <div>
                <Menu selectedMenuItem={this.props.selectedMenuItem}/>
                <div class="container">
                    <Route path="/" exact component={Home} />
                    <Route path="/rules" component={Rules} />
                    <Route path="/calendar" component={Calendar} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/resources" component={Resources} />
                    <Route path="/admin" component={Admin} />
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { selectedMenuItem: state.selectedMenuItem, }
}

export default connect(mapStateToProps)(App)