import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers'
import root from '../sagas/root'


import '../resources/css/style.css'
import 'bulma'

import PageComponent from './pages/page-component'
import TestPageComponent from './test/t-page-component'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

sagaMiddleware.run(root)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path='/test' component={TestPageComponent}/>
                        <Route path='/' component={PageComponent}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App
