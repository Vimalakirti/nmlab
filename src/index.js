import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'
import { createStore } from 'redux'
//import thunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <Switch>
            <App />
        </Switch>
    </BrowserRouter></Provider>,
    document.querySelector('#root')
)